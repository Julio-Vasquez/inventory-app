import { App } from 'antd'
import { Provider } from 'react-redux'
import type { ReactNode } from 'react'

import store from '../store'

interface AppProviderProps {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => (
  <Provider store={store}>
    <App>{children}</App>
  </Provider>
)

export default AppProvider
