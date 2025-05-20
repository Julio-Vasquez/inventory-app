import { Layout } from 'antd'

import Text from '../../atoms/Text'
import { UserAvatarMenu } from '../UserAvatarMenu'
import { CompanySelect } from '../CompanySelect/CompanySelect'

import './style.css'

const { Header } = Layout

export default function Topbar() {
  return (
    <Header className="topbar">
      <div className="topbar-title">
        <Text>Group Company</Text>
      </div>
      <CompanySelect />
      <UserAvatarMenu />
    </Header>
  )
}
