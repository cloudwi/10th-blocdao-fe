import classNames from 'classnames/bind'
import React, { useMemo } from 'react'

import Header from '@components/Header'

import styles from './index.module.css'

const WritePage: React.FC = () => {
  const cx = useMemo(() => classNames.bind(styles), [])

  return (
    <>
      <Header />
      <div className={cx('write')}>프로젝트 기본정보를 입력해주세요</div>
      <br></br>
      <div className={cx('write')}>모집구분</div>
    </>
  )
}

export default WritePage
