import { RouterProvider } from 'react-router'

import { appRouter } from './routes'
import AppProvider from './providers'
import { Suspense } from 'react'

const App = () => (
  <AppProvider>
    <Suspense fallback={<p>cargando</p>}>
      <RouterProvider router={appRouter} />
    </Suspense>
  </AppProvider>
)

export default App
