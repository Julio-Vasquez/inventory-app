import { RouterProvider } from 'react-router'

import { appRouter } from './routes'
import AppProvider from './providers'

const App = () => (
  <AppProvider>
    <RouterProvider router={appRouter} />
  </AppProvider>
)

export default App
