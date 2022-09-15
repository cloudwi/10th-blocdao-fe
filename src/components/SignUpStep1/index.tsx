import classNames from 'classnames/bind'
import React, { useMemo } from 'react'

import styles from './index.module.scss'

interface Props {
  nickName: string
  onChangeNickName: (nickName: string) => void
  onNext: () => void
}

const SignUpStep1: React.FC<Props> = ({ nickName, onChangeNickName, onNext }) => {
  const cx = useMemo(() => classNames.bind(styles), [])

  const handleNext = () => {
    if (nickName.trim().length === 0) {
      alert('닉네임을 입력해주세요')
      return
    }
    onNext()
  }

  return (
    <div className={cx('sign_up_step1')}>
      <br />
      <h1>
        블록다오에 처음 오셨군요!
        <br />
        우선, 사용하실 닉네임을 설정해볼까요?
      </h1>
      <form>
        닉네임{' '}
        <input
          id="input1"
          type="text"
          placeholder="입력해주세요!"
          defaultValue={nickName}
          onChange={(e) => onChangeNickName(e.target.value)}
        />
        <input id="input2" type="submit" onClick={handleNext} />
      </form>
    </div>
  )
}

export default SignUpStep1
