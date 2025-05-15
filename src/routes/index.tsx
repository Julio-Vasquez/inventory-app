import { createBrowserRouter } from 'react-router'

import { AuthGuard, GuestGuard } from '../guards'
import DashboardLayout from '../layout/DashboardLayout'
import { PRIVATE_PATHS, PUBLIC_PATHS } from '../utils/constants/routes.constant'

export const appRouter = createBrowserRouter([
  {
    element: <GuestGuard />,
    children: [
      {
        path: PUBLIC_PATHS.home,
        lazy: async () => ({
          Component: (await import('../pages/public/LoginPage')).default,
        }),
      },
    ],
  },
  {
    element: <AuthGuard />,
    children: [
      {
        path: PRIVATE_PATHS.home,
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import('../pages/private/home/HomePage'))
                .default,
            }),
          },
          {
            path: PRIVATE_PATHS.companies,
            lazy: async () => ({
              Component: (
                await import('../pages/private/companies/CompanyPage')
              ).default,
            }),
          },
          {
            path: PRIVATE_PATHS.products,
            lazy: async () => ({
              Component: (await import('../pages/private/products/ProductPage'))
                .default,
            }),
          },
          {
            path: PRIVATE_PATHS.inventory,
            lazy: async () => ({
              Component: (
                await import('../pages/private/inventory/InventoryPage')
              ).default,
            }),
          },
        ],
      },
    ],
  },
])
