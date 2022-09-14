import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const UID_LOCAL_STORAGE_KEY = 'UID'

interface State {
  uid: string | null
}

const initialState: State = { uid: localStorage.getItem(UID_LOCAL_STORAGE_KEY) }

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUid(state, action: PayloadAction<string | null>) {
      const uid = action.payload
      state.uid = uid
      if (uid !== null) {
        localStorage.setItem(UID_LOCAL_STORAGE_KEY, uid)
      } else {
        localStorage.removeItem(UID_LOCAL_STORAGE_KEY)
      }
    },
  },
})

export const { setUid } = slice.actions
export default slice.reducer
