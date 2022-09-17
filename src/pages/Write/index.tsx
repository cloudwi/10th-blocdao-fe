import classNames from 'classnames/bind'
import moment from 'moment'
import React, { useEffect, useMemo, useState } from 'react'
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
    expectedEndDate: '',
    isOnline: true,
    isRecruitment: false,
    recruitmentNumber: 1,
    recruitmentType: 'PROJECT',
    stacks: [],
    title: '',
  })

  const user = useFirebaseUser()
  const { isLoggedIn } = useAuth()

  useEffect(() => {
    const filteredContact = project.contact.replace(/[^0-9/]/g, '')
    const firstNumberCount = filteredContact.startsWith('02') ? 2 : 3

    // 000-0000-0000
    // 02-0000-0000
    // 000-000-0000
    // 000-000

    const numberCounts = (() => {
      if (filteredContact.length > firstNumberCount + 7) {
        return [firstNumberCount, 4]
      } else if (filteredContact.length > firstNumberCount + 3) {
        return [firstNumberCount, 3]
      } else if (filteredContact.length > firstNumberCount) {
        return [firstNumberCount]
      } else {
        return []
      }
    })()

    const sumReducer = (sum: number, value: number) => sum + value

    const adjustedContact = [
      ...numberCounts.map((count, offset) => {
        const startOffset = numberCounts.slice(0, offset).reduce(sumReducer, 0)
        const endOffset = startOffset + count
        return filteredContact.slice(startOffset, endOffset)
      }),
      filteredContact.slice(numberCounts.reduce(sumReducer, 0)),
    ].join('-')

    if (adjustedContact !== project.contact) {
      setProject((project) => ({ ...project, contact: adjustedContact }))
    }
  }, [project.contact])

  const handleSubmit = async () => {
    if (user === null || !isLoggedIn) {
      alert('비로그인 상태입니다. 로그인해주세요.')
      return
    }
    const token = await user.getIdToken()
    const isSuccess = await ProjectService.add({ ...project, createUid: user.uid }, token)
    alert(isSuccess ? '글이 정상적으로 추가되었습니다' : '글을 추가하는 중에 에러가 발생하였습니다')
  }

  const toDate = (dateString: string) => (dateString ? moment(dateString).toDate() : null)

  const toDateString = (date: Date | null) => (date ? moment(date).format('YYYY-MM-DD') : '')

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
                예상 일정
              </Form.Label>
              <Col sm={10}>
                <DatePicker
                  inline
                  selectsRange
                  selected={toDate(project.expectedStartDate)}
                  startDate={toDate(project.expectedStartDate)}
                  endDate={toDate(project.expectedEndDate)}
                  onChange={(dateRange) => {
                    const [startDate, endDate] = dateRange
                    setProject((project) => ({
                      ...project,
                      expectedStartDate: toDateString(startDate),
                      expectedEndDate: toDateString(endDate),
                    }))
                  }}
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
