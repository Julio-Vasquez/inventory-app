import { Layout, Menu } from 'antd'
import { Link } from 'react-router'

import { PRIVATE_PATHS } from '../../../utils/constants/routes.constant'

import './style.css'

const { Sider } = Layout

export default function Sidebar() {
  const items = Object.entries(PRIVATE_PATHS).map(route => ({
    key: route[0],
    icon: '🏠',
    label: <Link to={route[1]}>{route[0].toUpperCase()}</Link>,
  }))

  return (
    <Sider className="sidebar">
      <Menu className="sidebar_menu" mode="inline" items={items} />
    </Sider>
  )
}
