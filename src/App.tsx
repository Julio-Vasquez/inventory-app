import { useSelector } from 'react-redux'
import { RouterProvider } from 'react-router'

import DashboardLayout from './layout/DashboardLayout'

import type { RootState } from './store/Reducers'
import { privateRouter, publicRouter } from './routes'
import { AUTH } from './utils/constants/redux.constant'

const App = () => {
  const { authentication: auth } = useSelector(
    (state: RootState) => state[AUTH]
  )

  return !auth ? (
    <RouterProvider router={publicRouter} />
  ) : (
    <DashboardLayout>
      <RouterProvider router={privateRouter} />
    </DashboardLayout>
  )
}

export default App
