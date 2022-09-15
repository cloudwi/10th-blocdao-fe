import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Header from '@components/Header'
import SignUpStep1 from '@components/SignUpStep1'
import SignUpStep2 from '@components/SignUpStep2'
import useAuth from '@hooks/useAuth'
import { StackName } from '@services/stack'

const SignUpPage: React.FC = () => {
  const { stepId: rawStepId } = useParams()
  const navigate = useNavigate()

  const stepId = rawStepId && parseInt(rawStepId, 10)

  const [nickName, setNickName] = useState<string>('')
  const [stack, setStack] = useState<StackName | null>(null)

  const { signUp } = useAuth()

  const handleSignUp = async () => {
    const stacks = stack === null ? [] : [stack]
    const result = await signUp({ nickName, stacks })

    if (result) {
      alert('회원가입에 성공하였습니다!')
      navigate('/')
    } else {
      alert('회원가입중에 에러가 발생하였습니다')
    }
  }

  return (
    <>
      <Header />
      {stepId === 1 && (
        <SignUpStep1 nickName={nickName} onChangeNickName={setNickName} onNext={() => navigate('/signUp/2')} />
      )}
      {stepId === 2 && <SignUpStep2 selectedStack={stack} onStackChanged={setStack} onNext={handleSignUp} />}
    </>
  )
}

export default SignUpPage
