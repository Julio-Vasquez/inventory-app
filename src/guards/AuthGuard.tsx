import { Navigate, Outlet, useLocation } from 'react-router'

import { useAuth } from '../hooks/useAuth'
import { PUBLIC_PATHS } from '../utils/constants/routes.constant'

export const AuthGuard = () => {
  const { isAuth } = useAuth()
  const location = useLocation()

  if (!isAuth)
    return (
      <Navigate to={PUBLIC_PATHS.home} replace state={{ from: location }} />
    )

  return <Outlet />
}
