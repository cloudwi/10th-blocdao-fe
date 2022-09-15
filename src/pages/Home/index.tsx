import classNames from 'classnames/bind'
import React, { useEffect, useMemo, useState } from 'react'

import Header from '@components/Header'
import HomeCard from '@components/HomeCard'
import { Project, ProjectService } from '@services/project'
import Slide01Img from 'assets/home/slide01.jpg'
import Slide02Img from 'assets/home/slide02.jpg'

import styles from './index.module.css'

const HomePage: React.FC = () => {
  const cx = useMemo(() => classNames.bind(styles), [])

  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    ProjectService.getList().then(setProjects)
  }, [setProjects])

  const projectsRows = useMemo(
    () =>
      projects.reduce((rows, project, offset) => {
        const row = Math.floor(offset / 3)
        if (row < rows.length) {
          rows[row].push(project)
        } else {
          rows[row] = [project]
        }
        return rows
      }, Array<Project[]>()),
    [projects],
  )

  return (
    <>
      <Header />
      <div className={cx('section')}>
        <input type="radio" name="slide" id="slide01" checked />
        <input type="radio" name="slide" id="slide02" />
        <input type="radio" name="slide" id="slide03" />
        <div className={cx('slidewrap')}>
          <ul className={cx('slidelist')}>
            <li>
              <a>
                <label htmlFor="slide02" className={cx('left')}></label>
                <img src={Slide01Img} />
                <label htmlFor="slide02" className={cx('right')}></label>
              </a>
            </li>
            <li>
              <a>
                <label htmlFor="slide01" className={cx('left')}></label>
                <img src={Slide02Img} />
                <label htmlFor="slide01" className={cx('right')}></label>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx('container mt-5 mb-3')}>
        {projectsRows.map((projects, row) => {
          return (
            <div className={cx('row')} key={row}>
              {projects.map((project) => {
                return (
                  <div className={cx('col-md-4')} key={project.id}>
                    <HomeCard
                      writer={project.createUid}
                      updatedDate={new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000)}
                      title={
                        <>
                          [{project.recruitmentType}] <br />
                          {project.title}
                        </>
                      }
                      stack={project.projectStacks?.join(',') ?? ''}
                      estimatedStartDate={new Date(project.expectedStartDate)}
                    />
                  </div>
                )
              })}
            </div>
          )
        })}

        <div className={cx('row')}>
          <div className={cx('col-md-4')}>
            <HomeCard
              writer={'조정무님'}
              updatedDate={new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000)}
              title={
                <>
                  [사이드프로젝트] <br />
                  동물 NFT 서비 스 - 프론트, 백엔드 개발자 모집
                </>
              }
              stack={'React'}
              estimatedStartDate={new Date('2022-08-29')}
            />
          </div>
          <div className={cx('col-md-4')}>
            <HomeCard
              writer={'Dribbble'}
              updatedDate={new Date(new Date().getTime() - 4 * 24 * 60 * 60 * 1000)}
              title={
                <>
                  Junior Product <br />
                  Designer-Singapore
                </>
              }
              stack={'Product'}
              appliedCapacity={42}
              totalCapacity={70}
            />
          </div>
          <div className={cx('col-md-4')}>
            <HomeCard
              writer={'Reddit'}
              updatedDate={new Date(new Date().getTime() - 2 * 24 * 60 * 60 * 1000)}
              title={
                <>
                  Software Architect <br />
                  Java - USA
                </>
              }
              stack={'Design'}
              appliedCapacity={52}
              totalCapacity={100}
            />
          </div>
        </div>

        <div className={cx('row')}>
          <div className={cx('col-md-4')}>
            <HomeCard
              writer={'조정무님'}
              updatedDate={new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000)}
              title={
                <>
                  [사이드프로젝트] <br />
                  동물 NFT 서비 스 - 프론트, 백엔드 개발자 모집
                </>
              }
              stack={'React'}
              estimatedStartDate={new Date('2022-08-29')}
            />
          </div>
          <div className={cx('col-md-4')}>
            <HomeCard
              writer={'Dribbble'}
              updatedDate={new Date(new Date().getTime() - 4 * 24 * 60 * 60 * 1000)}
              title={
                <>
                  Junior Product <br />
                  Designer-Singapore
                </>
              }
              stack={'Product'}
              appliedCapacity={42}
              totalCapacity={70}
            />
          </div>
          <div className={cx('col-md-4')}>
            <HomeCard
              writer={'Reddit'}
              updatedDate={new Date(new Date().getTime() - 2 * 24 * 60 * 60 * 1000)}
              title={
                <>
                  Software Architect <br />
                  Java - USA
                </>
              }
              stack={'Design'}
              appliedCapacity={52}
              totalCapacity={100}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
