import { AxiosError } from 'axios'
import { FirebaseError } from 'firebase/app'
import { useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { FirebaseService } from '@services/firebase'
import { MemberService } from '@services/member'
import { setUid } from '@states/reducers/user'
import { RootState, useAppDispatch } from '@states/store'

import useFirebaseUser from './useFirebaseUser'

const useAuth = () => {
  const firebaseUser = useFirebaseUser()

  const uid = useSelector((state: RootState) => state.user.uid)
  const dispatch = useAppDispatch()

  const isLoggedIn = useMemo((): boolean => {
    if (firebaseUser === null) {
      return false
    }

    return firebaseUser.uid === uid
  }, [firebaseUser, uid])

  const signInOrSignUp = useCallback(async (): Promise<boolean> => {
    const loginInfo = await FirebaseService.signInWithGoogle().catch((error) => {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/cancelled-popup-request') {
          return null
        }
        alert(error.message)
      }
      return null
    })

    if (loginInfo === null) {
      return false
    }

    const isSuccess = await MemberService.signIn({ token: loginInfo.token })
      .then(() => true)
      .catch(async (error) => {
        console.error('Fail to login', error)

        if (error instanceof AxiosError && error.response?.status === 404) {
          await MemberService.signUp({
            token: loginInfo.token,
            nickName: loginInfo.displayName,
            imageUrl: loginInfo.photoURL,
            email: loginInfo.email,
            phone: loginInfo.phoneNumber,
            stacks: [],
            profileLink: '',
          })
          return true
        }

        alert('로그인중에 에러가 발생하였습니다')
        return false
      })
      .catch((error) => {
        console.error('Fail to signUp', error)
        alert('회원가입중에 에러가 발생하였습니다')
        return false
      })
      .then((canSignIn) => {
        if (canSignIn) {
          dispatch(setUid(loginInfo.uid))
        }
        return canSignIn
      })

    return isSuccess
  }, [dispatch])

  const signOut = useCallback(async () => {
    await FirebaseService.signOut().then(() => dispatch(setUid(null)))
  }, [dispatch])

  return {
    isLoggedIn,
    signInOrSignUp,
    signOut,
  }
}

export default useAuth
