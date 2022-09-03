import { FirebaseError, initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCo_ovOFKyhUwvqFgoC-ex6UJtx-FS_8v0',
  authDomain: 'cloudwi-894c9.firebaseapp.com',
  projectId: 'cloudwi-894c9',
  storageBucket: 'cloudwi-894c9.appspot.com',
  messagingSenderId: '481004472950',
  appId: '1:481004472950:web:3a6cf754fcb1204cd6ad57',
  measurementId: 'G-HLG78Q6SZD',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const requestLoginAndGetToken = async (): Promise<string | null> => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    const credential = GoogleAuthProvider.credentialFromResult(result)
    return credential?.accessToken ?? null
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      const errorMessage = error.message
      alert(errorMessage)
    } else {
      alert('Unknown error!')
    }
    return null
  }
}

export const FirebaseService = { requestLoginAndGetToken }
