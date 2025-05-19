import { type ReactNode } from 'react'

import Topbar from '../../molecules/Topbar'
import Sidebar from '../../organisms/Sidebar'
import { useCompanyInitializer } from '../../../hooks/useCompanyInitializer'

import './style.css'

type DashboardProps = {
  children: ReactNode
}

export default function DashboardTemplate({ children }: DashboardProps) {
  useCompanyInitializer()

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="container">
        <Topbar />
        <div className="content">{children}</div>
      </div>
    </div>
  )
}
