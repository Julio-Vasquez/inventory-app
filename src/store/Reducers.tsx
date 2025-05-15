import { combineReducers, type Action } from '@reduxjs/toolkit'

import { AUTH, LOGOUT } from '../utils/constants/redux.constant'

import authReducer, {
  initialState as initialStateAuth,
} from '../services/auth.slice'

const appReducer = combineReducers({
  [AUTH]: authReducer,
})

export type RootState = ReturnType<typeof appReducer>

const rootReducer = (state: RootState | undefined, action: Action) => {
  if (action.type === LOGOUT)
    return appReducer({ [AUTH]: initialStateAuth }, action)

  return appReducer(state, action)
}

export default rootReducer
