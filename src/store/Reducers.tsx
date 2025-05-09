import { combineReducers, type Action } from '@reduxjs/toolkit'

import { AUTH } from '../utils/constants/redux.constant'

import authReducer, {
  initialState as initialStateAuth,
} from '../services/auth.slice'

const appReducer = combineReducers({
  [AUTH]: authReducer,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state: any, action: Action) => {
  if (action.type === 'auth/logout')
    state = {
      [AUTH]: initialStateAuth,
    }
  return appReducer(state, action)
}

export type RootState = ReturnType<typeof appReducer>

export default rootReducer
