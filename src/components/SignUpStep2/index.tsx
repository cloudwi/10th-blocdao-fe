import classNames from 'classnames/bind'
import React, { useMemo } from 'react'

import { StackName, StackService } from '@services/stack'

import styles from './index.module.scss'

interface Props {
  selectedStack: StackName | null
  onStackChanged: (stack: StackName | null) => void
  onNext: () => void
}

const SignUpStep2: React.FC<Props> = ({ selectedStack, onStackChanged, onNext }) => {
  const cx = useMemo(() => classNames.bind(styles), [])

  return (
    <div className={cx('sign_up_step2')}>
      <br />
      <h1>반가워요! 기술스택, 직무도 선택해주세요!</h1>
      <br />
      <br />
      <select onChange={(e) => onStackChanged((e.target.value as StackName) || null)}>
        <option selected={selectedStack === null}>기술스택</option>
        {StackService.getNames().map((stack) => (
          <option key={stack} value={stack} selected={selectedStack === stack}>
            {stack}
          </option>
        ))}
      </select>
      <br />
      <br />
      <select>
        <option selected>직무</option>
        <option>옵션1</option>
        <option>옵션2</option>
        <option>옵션3</option>
      </select>
      <br />
      <button onClick={onNext}>다음</button>
    </div>
  )
}

export default SignUpStep2
