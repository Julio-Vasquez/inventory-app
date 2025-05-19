import { Outlet } from 'react-router'

import DashboardTemplate from '../components/templates/DashboardTemplate'
import { CompanyProvider } from '../providers/company'

export default function DashboardLayout() {
  return (
    <CompanyProvider>
      <DashboardTemplate>
        <Outlet />
      </DashboardTemplate>
    </CompanyProvider>
  )
}
