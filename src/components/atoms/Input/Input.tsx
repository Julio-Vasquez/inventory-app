import type { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input: FC<InputProps> = ({ label, id, name, ...props }) => {
  const inputId = id || name || 'input-id'

  return (
    <div className="input-wrapper">
      {label && <label htmlFor={inputId}>{label}</label>}
      <input {...props} name={name} id={inputId} className="input" />
    </div>
  )
}
