import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import LoginForm from '../molecules/forms/LoginForm'

import { api } from '../../api/api'
import type { ApiResponse } from '../../types'
import { useApiRequest } from '../../hooks/useApi'
import { storageManager } from '../../utils/storage'
import { loginSuccess } from '../../services/auth.slice'
import type { Payload } from '../../services/auth.types'
import { PRIVATE_PATHS } from '../../utils/constants/routes.constant'

export default function LoginTemplate() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { post } = useApiRequest<ApiResponse<ResponseLogin>>()

  const handleLogin = async ({ email, password }: Account) => {
    const result = await post(api.auth.login, {
      email,
      password,
    })

    if (result?.status === 'success') {
      const { payload, message } = result
      dispatch(loginSuccess({ message, success: true, ...payload }))

      storageManager.setItem<Payload>({
        newItem: { ...payload, message, success: true },
      })
      navigate(PRIVATE_PATHS.home)
    }

    console.log(result?.status === 'success' ? result.payload : 'GG')
  }

  return (
    <div className="login-background">
      <div className="login-card">
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  )
}
