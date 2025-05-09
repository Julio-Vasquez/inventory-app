import Text from '../../atoms/Text'
import SidebarItem from '../../molecules/SidebarItem'

import { paths } from '../../../routes'

import './style.css'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar_title">
        <Text>Group Company</Text>
      </div>
      <SidebarItem icon="🏠" label="DASHBOARD" active link="/" />
      {Object.entries(paths).map(e => (
        <SidebarItem
          key={e[0]}
          icon="🏠"
          label={e[0].toUpperCase()}
          link={e[1]}
        />
      ))}
    </aside>
  )
}
