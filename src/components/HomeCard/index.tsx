import classNames from 'classnames/bind'
import moment from 'moment'
import React, { useMemo } from 'react'

import styles from './index.module.css'

interface Props {
  writer: string
  title: React.ReactNode
  stack: string
  updatedDate: Date | string | number
  estimatedStartDate?: Date | string | number
  appliedCapacity?: number
  totalCapacity?: number
}

const HomeCard: React.FC<Props> = ({
  writer,
  title,
  stack,
  updatedDate,
  estimatedStartDate,
  appliedCapacity,
  totalCapacity,
}) => {
  const cx = useMemo(() => classNames.bind(styles), [])

  const formattedUpdatedDate = useMemo(() => {
    const diffDays = moment(updatedDate).diff(moment(), 'days')

    if (diffDays > 0) {
      return `${diffDays}일후`
    }
    if (diffDays < 0) {
      return `${-diffDays}일전`
    }
    return '오늘'
  }, [updatedDate])

  const formattedEstimatedStartDate = useMemo(() => {
    if (estimatedStartDate === undefined) {
      return null
    }
    return moment(estimatedStartDate).format('YYYY.MM.DD')
  }, [estimatedStartDate])

  const progress =
    appliedCapacity !== undefined &&
    totalCapacity !== undefined &&
    !Number.isNaN(appliedCapacity) &&
    !Number.isNaN(totalCapacity)
      ? (appliedCapacity / totalCapacity) * 100
      : null

  return (
    <div className={cx('card p-3 mb-2')}>
      <div className={cx('d-flex justify-content-between')}>
        <div className={cx('d-flex flex-row align-items-center')}>
          <div className={cx('ms-2 c-details')}>
            <h6 className={cx('mb-0')}>{writer}</h6> <span>{formattedUpdatedDate}</span>
          </div>
        </div>
        <div className={cx('badge')}> {stack && <span>{stack}</span>} </div>
      </div>
      <div className={cx('mt-5')}>
        <h3 className={cx('heading')}>{title}</h3>
        <div className={cx('mt-5')}>
          {progress !== null && (
            <>
              <div className={cx('progress')}>
                <div
                  className={cx('progress-bar')}
                  role="progressbar"
                  style={{ width: `${progress}%` }}
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}></div>
              </div>
              <div className={cx('mt-3')}>
                {' '}
                <span className={cx('text1')}>
                  {appliedCapacity} Applied <span className={cx('text2')}>of {totalCapacity} capacity</span>
                </span>{' '}
              </div>
            </>
          )}
          {formattedEstimatedStartDate !== null && (
            <div className="mt-3">
              {' '}
              <span className="text1">
                시작예정일 : <span className="text2">{formattedEstimatedStartDate}</span>
              </span>{' '}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomeCard
