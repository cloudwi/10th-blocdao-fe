import { FirebaseService } from '@services/firebase'
import { MemberService } from '@services/member'
import classNames from 'classnames/bind'
import React, { useMemo } from 'react'

import LogoImg from 'assets/home/logo.svg'

import styles from './index.module.css'

const Header: React.FC = () => {
  const cx = useMemo(() => classNames.bind(styles), [])

  const handleClickSignUpOrSignIn = async () => {
    const loginInfo = await FirebaseService.requestLogin()
    if (loginInfo === null) {
      return
    }

    await MemberService.signUp({
      token: loginInfo.accessToken,
      nickName: loginInfo.displayName,
      imageUrl: loginInfo.photoURL,
      email: loginInfo.email,
      phone: loginInfo.phoneNumber,
      profileLink: '',
    })
  }

  return (
    <>
      <div className={cx('header')}>
        <div className={cx('logo_section')}>
          <img src={LogoImg} />
        </div>
        <div className={cx('page_title')}>블록다오</div>
        <div className={cx('main_menu')}>
          <ul>
            <li>새 글쓰기</li>
            <li>메이트모집</li>
            <li className={cx('login_menu')} onClick={handleClickSignUpOrSignIn}>
              로그인/회원가입
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
