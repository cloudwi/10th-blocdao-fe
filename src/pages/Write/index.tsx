import classNames from 'classnames/bind'
import React, { useMemo } from 'react'

import Header from '@components/Header'

import styles from './index.module.css'

const WritePage: React.FC = () => {
  const cx = useMemo(() => classNames.bind(styles), [])

  return (
    <>
      <Header />
      <div className={cx('write')}>WRITE PAGE</div>
    </>
  )
}

export default WritePage
