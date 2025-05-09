import type { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input: FC<InputProps> = ({ label, ...props }) => (
  <div className="input-wrapper">
    {label && <label>{label}</label>}
    <input {...props} className="input" />
  </div>
)
