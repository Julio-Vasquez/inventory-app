import { RouterProvider } from 'react-router'

import DashboardLayout from './layout/DashboardLayout'

import { useAuth } from './hooks/useAuth'
import { privateRouter, publicRouter } from './routes'

const App = () => {
  const { isAuth } = useAuth()

  return !isAuth ? (
    <RouterProvider router={publicRouter} />
  ) : (
    <DashboardLayout>
      <RouterProvider router={privateRouter} />
    </DashboardLayout>
  )
}

export default App
