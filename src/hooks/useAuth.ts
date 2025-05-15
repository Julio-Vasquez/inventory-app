import { useSelector } from 'react-redux'

import type { RootState } from '../store/Reducers'
import { AUTH } from '../utils/constants/redux.constant'

export const useAuth = () => {
  const { authentication, ...values } = useSelector(
    (state: RootState) => state[AUTH]
  )

  return { isAuth: authentication, ...values }
}
