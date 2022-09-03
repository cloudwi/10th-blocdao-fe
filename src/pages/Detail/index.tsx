import classNames from 'classnames/bind'
import React, { useMemo } from 'react'

import Header from '@components/Header'

import styles from './index.module.css'

const DetailPage: React.FC = () => {
  const cx = useMemo(() => classNames.bind(styles), [])

  return (
    <>
      <Header />
      <div className={cx('write')}>DETAIL PAGE</div>
    </>
  )
}

export default DetailPage
