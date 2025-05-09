import type { ReactNode } from 'react'

type IconProps = {
  children: ReactNode
}

export default function Icon({ children }: IconProps) {
  return <span style={{ fontSize: 20 }}>{children}</span>
}
