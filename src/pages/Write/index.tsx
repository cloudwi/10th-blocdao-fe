import classNames from 'classnames/bind'
import moment from 'moment'
import React, { useMemo, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import DatePicker from 'react-datepicker'

import Header from '@components/Header'
import useAuth from '@hooks/useAuth'
import useFirebaseUser from '@hooks/useFirebaseUser'
import { ProjectService, ProjectWriteRequest } from '@services/project'
import { StackService } from '@services/stack'

import styles from './index.module.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'

const WritePage: React.FC = () => {
  const cx = useMemo(() => classNames.bind(styles), [])

  const [project, setProject] = useState<Omit<ProjectWriteRequest, 'createUid'>>({
    address: '',
    contact: '',
    content: '',
    expectedStartDate: '',
    isOnline: true,
    isRecruitment: false,
    period: 1,
    recruitmentNumber: 1,
    recruitmentType: 'PROJECT',
    stacks: [],
    title: '',
  })

  const user = useFirebaseUser()
  const { isLoggedIn } = useAuth()

  const handleSubmit = async () => {
    if (user === null || !isLoggedIn) {
      alert('비로그인 상태입니다. 로그인해주세요.')
      return
    }
    const token = await user.getIdToken()
    const isSuccess = await ProjectService.add({ ...project, createUid: user.uid }, token)
    alert(isSuccess ? '글이 정상적으로 추가되었습니다' : '글을 추가하는 중에 에러가 발생하였습니다')
  }

  return (
    <>
      <Header />
      <div className={cx('write')}>
        <Container>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                제목
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  className="form-control"
                  value={project.title}
                  onChange={(e) => setProject((project) => ({ ...project, title: e.target.value }))}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                전화번호
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  className="form-control"
                  value={project.contact}
                  placeholder="010-0000-0000"
                  onChange={(e) => setProject((project) => ({ ...project, contact: e.target.value }))}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                내용
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  className="form-control"
                  value={project.content}
                  onChange={(e) => setProject((project) => ({ ...project, content: e.target.value }))}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                예상시작일정
              </Form.Label>
              <Col sm={10}>
                <DatePicker
                  inline
                  selected={project.expectedStartDate ? moment(project.expectedStartDate).toDate() : null}
                  onChange={(date: Date) =>
                    setProject((project) => ({ ...project, expectedStartDate: moment(date).format('YYYY-MM-DD') }))
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Check
                type="switch"
                defaultChecked={!project.isOnline}
                onClick={() => setProject((project) => ({ ...project, isOnline: !project.isOnline }))}
                label="오프라인 여부"
              />
              {!project.isOnline && (
                <>
                  <Form.Label column sm={2}>
                    주소
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      className="form-control"
                      value={project.address}
                      onChange={(e) => setProject((project) => ({ ...project, address: e.target.value }))}
                    />
                  </Col>
                </>
              )}
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Check
                type="switch"
                defaultChecked={project.isRecruitment}
                onClick={() => setProject((project) => ({ ...project, isRecruitment: !project.isRecruitment }))}
                label="채용 여부"
              />
            </Form.Group>
            {project.isRecruitment && (
              <>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={2}>
                    채용 인원 : {project.recruitmentNumber}명
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Range
                      min={1}
                      max={100}
                      value={project.recruitmentNumber}
                      onChange={(e) =>
                        setProject((project) => ({ ...project, recruitmentNumber: Number(e.target.value) }))
                      }
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={2}>
                    채용 종류
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Select
                      value={project.recruitmentType}
                      onChange={(e) => {
                        const recruitmentType = e.target.value as 'STUDY' | 'PROJECT'
                        setProject((project) => ({ ...project, recruitmentType }))
                      }}>
                      <option value="STUDY">STUDY</option>
                      <option value="PROJECT">PROJECT</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </>
            )}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                기술 스택
              </Form.Label>
              <Col sm={10}>
                {StackService.getNames().map((stackName) => (
                  <Form.Check
                    key={stackName}
                    type={'checkbox'}
                    label={stackName}
                    defaultChecked={project.stacks.includes(stackName)}
                    onClick={() => {
                      const stacks = project.stacks.includes(stackName)
                        ? project.stacks.filter((oldStackName) => oldStackName !== stackName)
                        : [...project.stacks, stackName]
                      setProject((project) => ({ ...project, stacks }))
                    }}
                  />
                ))}
              </Col>
            </Form.Group>
            <Button onClick={handleSubmit}>글추가</Button>
          </Form>
        </Container>
      </div>
    </>
  )
}

export default WritePage
