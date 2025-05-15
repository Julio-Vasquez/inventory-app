import { createSlice } from '@reduxjs/toolkit'

import { authStore } from '../utils/storage'
import { AUTH } from '../utils/constants/redux.constant'
import type { loginSuccessType, State } from './auth.types'

export const initialState: State = {
  authentication: authStore.isTokenValid(authStore.getStoredToken()),
  error: false,
  loading: false,
  message: '',
  success: false,
  token: '', //the token
  name: '',
  email: '',
  role: '',
  _id: '',
}

export const AuthSlice = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    loginSuccess: (state, { payload }: loginSuccessType) => ({
      ...state,
      authentication: true,
      error: false,
      loading: false,
      success: payload.success,
      token: payload.token,
      message: payload.message,
    }),
    logout: state => ({ ...state, ...initialState }),
  },
})

export const { loginSuccess, logout } = AuthSlice.actions
export default AuthSlice.reducer
