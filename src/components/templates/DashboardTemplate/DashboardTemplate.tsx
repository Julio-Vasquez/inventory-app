import { Layout } from 'antd'
import { type ReactNode } from 'react'

import Topbar from '../../molecules/Topbar'
import Sidebar from '../../organisms/Sidebar'
import { useCompanyInitializer } from '../../../hooks/useCompanyInitializer'

import './style.css'

type DashboardProps = {
  children: ReactNode
}

const { Content, Footer } = Layout

export default function DashboardTemplate({ children }: DashboardProps) {
  useCompanyInitializer()

  return (
    <Layout className="dashboard-layout">
      <Topbar />
      <Layout>
        <Sidebar />
        <Layout className="container">
          <Content className="content">{children}</Content>
          <Footer className="footer">
            © {new Date().getFullYear()} — Construido con ❤️ usando Ant Design
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}
