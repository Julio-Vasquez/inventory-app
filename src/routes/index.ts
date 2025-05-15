import { createBrowserRouter } from 'react-router'

import { PRIVATE_PATHS, PUBLIC_PATHS } from '../utils/constants/routes.constant'

export const publicRouter = createBrowserRouter([
  {
    path: PUBLIC_PATHS.home,
    lazy: async () => ({
      Component: (await import('../pages/public/LoginPage')).default,
    }),
  },
])

export const privateRouter = createBrowserRouter([
  {
    path: PRIVATE_PATHS.home,
    lazy: async () => ({
      Component: (await import('../pages/private/home/HomePage')).default,
    }),
  },
  {
    path: PRIVATE_PATHS.companies,
    lazy: async () => ({
      Component: (await import('../pages/private/companies/CompanyPage'))
        .default,
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
      Component: (await import('../pages/private/inventory/InventoryPage'))
        .default,
    }),
  },
])
