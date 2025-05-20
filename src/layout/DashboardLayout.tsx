import { Outlet } from 'react-router'

import { CompanyProvider } from '../providers/company'
import DashboardTemplate from '../components/templates/DashboardTemplate'

export default function DashboardLayout() {
  return (
    <CompanyProvider>
      <DashboardTemplate>
        <Outlet />
      </DashboardTemplate>
    </CompanyProvider>
  )
}
