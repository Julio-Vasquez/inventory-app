import { createBrowserRouter } from 'react-router'

export const paths = {
  companies: '/companies',
  products: '/products',
  inventory: '/inventory',
  home: '/',
}

export const publicRouter = createBrowserRouter([
  {
    path: '/',
    lazy: async () => ({
      Component: (await import('../pages/public/LoginPage')).default,
    }),
  },
])

export const privateRouter = createBrowserRouter([
  {
    path: paths.home,
    lazy: async () => ({
      Component: (await import('../pages/private/home/HomePage')).default,
    }),
  },
  {
    path: paths.companies,
    lazy: async () => ({
      Component: (await import('../pages/private/companies/CompanyPage'))
        .default,
    }),
  },
  {
    path: paths.products,
    lazy: async () => ({
      Component: (await import('../pages/private/products/ProductPage'))
        .default,
    }),
  },
  {
    path: paths.inventory,
    lazy: async () => ({
      Component: (await import('../pages/private/inventory/InventoryPage'))
        .default,
    }),
  },
])
