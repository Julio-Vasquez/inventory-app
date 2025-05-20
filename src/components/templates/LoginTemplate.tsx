import LoginForm from '../molecules/forms/LoginForm'

import { useLogin } from '../../hooks/api/useLogin'

export default function LoginTemplate() {
  const { handleLogin } = useLogin()

  return (
    <div className="login-background">
      <div className="login-card">
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  )
}
