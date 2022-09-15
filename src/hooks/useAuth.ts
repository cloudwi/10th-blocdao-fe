import { AxiosError } from 'axios'
import { FirebaseError } from 'firebase/app'
import { useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { FirebaseService } from '@services/firebase'
import { MemberService } from '@services/member'
import { StackName } from '@services/stack'
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

  const signIn = useCallback(async (): Promise<'SUCCESS' | 'NEED_SIGN_UP' | 'FAILURE' | 'CANCELED'> => {
    let loginInfo
    try {
      loginInfo = await FirebaseService.signInWithGoogle()

      try {
        await MemberService.signIn({ token: loginInfo.token })
        dispatch(setUid(loginInfo.uid))
        return 'SUCCESS'
      } catch (error) {
        console.error('Fail to login', error)

        if (error instanceof AxiosError && error.response?.status === 404) {
          return 'NEED_SIGN_UP'
        }

        return 'FAILURE'
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/cancelled-popup-request') {
          return 'CANCELED'
        }
        alert(error.message)
      }
      return 'FAILURE'
    }
  }, [dispatch])

  const signUp = useCallback(
    async ({ nickName, stacks }: { nickName?: string; stacks?: StackName[] }): Promise<boolean> => {
      if (firebaseUser === null) {
        return false
      }

      const token = await firebaseUser.getIdToken()

      try {
        await MemberService.signUp({
          token,
          nickName: nickName ?? firebaseUser.displayName ?? '',
          imageUrl: firebaseUser.photoURL ?? '',
          email: firebaseUser.email ?? '',
          phone: firebaseUser.phoneNumber ?? '',
          stacks: stacks ?? [],
          profileLink: '',
        })
        dispatch(setUid(firebaseUser.uid))
        return true
      } catch (error) {
        console.error('Fail to signUp', error)
        return false
      }
    },
    [dispatch],
  )

  const signOut = useCallback(async () => {
    await FirebaseService.signOut().then(() => dispatch(setUid(null)))
  }, [dispatch])

  return {
    isLoggedIn,
    signIn,
    signUp,
    signOut,
  }
}

export default useAuth
