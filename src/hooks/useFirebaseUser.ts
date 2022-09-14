import { User } from 'firebase/auth'
import { useEffect, useState } from 'react'

import { FirebaseService } from '@services/firebase'

const useFirebaseUser = () => {
  const [user, setUser] = useState<User | null>(FirebaseService.auth.currentUser)

  useEffect(() => {
    const unsubscribe = FirebaseService.auth.onAuthStateChanged((user) => {
      setUser(user)
    })

    return () => unsubscribe()
  })

  return user
}

export default useFirebaseUser
