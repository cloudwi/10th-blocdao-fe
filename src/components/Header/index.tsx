import classNames from 'classnames/bind'
import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

import useAuth from '@hooks/useAuth'
import LogoImg from 'assets/home/logo.svg'

import styles from './index.module.css'

const Header: React.FC = () => {
  const cx = useMemo(() => classNames.bind(styles), [])

  const { isLoggedIn, signInOrSignUp, signOut } = useAuth()

  return (
    <>
      <div className={cx('header')}>
        <Link to={'/'}>
          <a>
            <div className={cx('logo_section')}>
              <img src={LogoImg} />
            </div>
            <div className={cx('page_title')}>블록다오</div>
          </a>
        </Link>
        <div className={cx('main_menu')}>
          <ul>
            <Link to={'/write'}>
              <li>새 글쓰기</li>
            </Link>
            <Link to={'/find'}>
              <li>메이트모집</li>
            </Link>
            <li className={cx('login_menu')} onClick={!isLoggedIn ? signInOrSignUp : signOut}>
              {!isLoggedIn ? <>로그인/회원가입</> : <>로그아웃</>}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
