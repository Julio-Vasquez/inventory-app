import { Outlet } from 'react-router'

import DashboardTemplate from '../components/templates/DashboardTemplate'

export default function DashboardLayout() {
  return (
    <DashboardTemplate>
      <Outlet />
    </DashboardTemplate>
  )
}
