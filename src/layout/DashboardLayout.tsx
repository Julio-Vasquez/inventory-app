import type { PropsWithChildren } from 'react'

import DashboardTemplate from '../components/templates/DashboardTemplate'

export default function DashboardLayout({ children }: PropsWithChildren) {
  return <DashboardTemplate>{children}</DashboardTemplate>
}
