import type { ReactNode } from 'react'

import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'

import './style.css'

interface SidebarItemProps {
  icon: ReactNode
  label: string
  active?: boolean
  link: string
}

export default function SidebarItem({
  icon,
  label,
  active,
  link,
}: SidebarItemProps) {
  return (
    <a
      href={link}
      style={{
        backgroundColor: active ? '#1976d2' : 'transparent',
        color: active ? '#fff' : '#333',
      }}
      className="sidebar-item"
    >
      <Icon>{icon}</Icon>
      <Text>{label}</Text>
    </a>
  )
}
