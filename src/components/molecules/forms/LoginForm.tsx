import type { FormEvent } from 'react'
import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/Button'

import logo from '../../../assets/img/logo.png'

interface LoginFormProps {
  onSubmit: (form: { email: string; password: string }) => void
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email') as string
    const password = form.get('password') as string
    onSubmit({ email, password })
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <img src={logo} alt="Group Company Logo" className="login-logo" />

      <Input type="email" placeholder="Correo electrónico" name="email" />
      <Input type="password" placeholder="Contraseña" name="password" />

      <Button type="submit">LOGIN</Button>

      <div className="login-footer">
        <a href="#">Register</a>
      </div>
    </form>
  )
}
