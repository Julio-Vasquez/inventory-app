import { Dropdown, Avatar } from 'antd'
import { useDispatch } from 'react-redux'
import { LogoutOutlined } from '@ant-design/icons'
import type { ItemType } from 'antd/es/menu/interface'

import AvatarIcon from '../../atoms/Avatar'
import user from '../../../assets/img/user.png'

import { useAuth } from '../../../hooks/useAuth'
import { logout } from '../../../services/auth.slice'
import { storageManager } from '../../../utils/storage'
import { capitalizeWords, truncateString } from '../../../utils/formats'

import './style.css'

export const UserAvatarMenu = () => {
  const dispatch = useDispatch()
  const { name, role } = useAuth()

  const handleLogout = () => {
    dispatch(logout())
    storageManager.clearAll()
  }

  const username = capitalizeWords(
    truncateString({
      value: name,
      maxLength: 10,
      ellipsis: true,
    })
  )

  const items: ItemType[] = [
    {
      key: 'user',
      label: `${username} | ${role}`,
      disabled: true,
    },
    {
      key: 'logout',
      label: 'Cerrar sesión',
      icon: <LogoutOutlined />,
      onClick: () => handleLogout(),
    },
  ]

  return (
    <Dropdown menu={{ items }} placement="bottomRight" arrow>
      <Avatar className="logout-user" icon={<AvatarIcon src={user} />} />
    </Dropdown>
  )
}
