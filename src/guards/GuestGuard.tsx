import { Navigate, Outlet } from 'react-router'

import { useAuth } from '../hooks/useAuth'
import { PRIVATE_PATHS } from '../utils/constants/routes.constant'

export const GuestGuard = () => {
  const { isAuth } = useAuth()

  if (isAuth) return <Navigate to={PRIVATE_PATHS.home} replace />

  return <Outlet />
}
