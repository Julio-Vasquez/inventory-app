import type { ReactNode } from 'react'

import Sidebar from '../../organisms/Sidebar'
import Topbar from '../../molecules/Topbar'

import './style.css'

type DashboardProps = {
  children: ReactNode
}

export default function DashboardTemplate({ children }: DashboardProps) {
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
