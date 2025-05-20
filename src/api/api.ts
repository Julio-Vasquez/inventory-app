export const api = {
  auth: {
    login: '/auth/login',
  },
  companies: {
    allCompanies: '/companies/',
    create: '/companies/',
    remove: (nit: string) => `/companies/${nit}`,
    update: (nit: string) => `/companies/${nit}`,
  },
  products: {
    allProducts: '/products/',
    create: '/products/',
    remove: (productId: string) => `/products/${productId}`,
    update: (productId: string) => `/products/${productId}`,
  },
  inventory: {
    inventory: (companyId: string) => `/inventory/company/${companyId}`,
    create: '/inventory/',
    update: (inventoryId: string) => `/inventory/${inventoryId}`,
    remove: (inventoryId: string) => `/inventory/${inventoryId}`,
  },
}
