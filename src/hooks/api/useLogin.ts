import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { useApiClient } from '../useApiClient'

import { api } from '../../api/api'
import type { ApiResponse } from '../../types'
import { storageManager } from '../../utils/storage'
import { loginSuccess } from '../../services/auth.slice'
import type { Payload } from '../../services/auth.types'
import { PRIVATE_PATHS } from '../../utils/constants/routes.constant'

export const useLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { post } = useApiClient<ApiResponse<ResponseLogin>>()

  const handleLogin = async ({ email, password }: Account) => {
    const result = await post(api.auth.login, { email, password })

    if (result?.status === 'success') {
      const { payload, message } = result
      const obj = { ...payload, message, success: true }

      dispatch(loginSuccess(obj))

      storageManager.setItem<Payload>({ newItem: obj })

      navigate(PRIVATE_PATHS.home)
    }

    console.log(result?.status === 'success' ? result.payload : 'GG')
  }

  return { handleLogin }
}
