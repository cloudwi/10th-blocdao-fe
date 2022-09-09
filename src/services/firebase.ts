import { initializeApp } from 'firebase/app'
import { browserLocalPersistence, getAuth, GoogleAuthProvider, setPersistence, signInWithPopup } from 'firebase/auth'

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

const getCurrentUID = (): string | null => {
  return auth.currentUser?.uid ?? null
}

const signInWithGoogle = async (): Promise<{
  uid: string
  token: string
  displayName: string
  photoURL: string
  email: string
  phoneNumber: string
}> => {
  await setPersistence(auth, browserLocalPersistence)

  const result = await signInWithPopup(auth, googleProvider)
  const { user } = result

  const token = await result.user.getIdToken()
  if (token.length === 0) {
    throw new Error()
  }
  const { uid, displayName, photoURL, email, phoneNumber } = user

  return {
    uid,
    token,
    displayName: displayName ?? 'Unknown',
    photoURL: photoURL ?? '',
    email: email ?? '',
    phoneNumber: phoneNumber ?? '',
  }
}

const signOut = async (): Promise<void> => await auth.signOut()

export const FirebaseService = { getCurrentUID, signInWithGoogle, signOut, auth }
