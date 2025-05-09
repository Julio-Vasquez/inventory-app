import { logger } from 'redux-logger'
import { configureStore, Tuple } from '@reduxjs/toolkit'

import appReducer from './Reducers'

const IS_DEV = true

const middlewares: Array<typeof logger> = IS_DEV ? [logger] : []

const Store = configureStore({
  reducer: appReducer,
  devTools: true,
  middleware: () => new Tuple(...middlewares),
})

export default Store
