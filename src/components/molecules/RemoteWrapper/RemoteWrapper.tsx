import { lazy, Suspense } from 'react'

const MemeGenerator = lazy(() => import('remote/MemeGenerator'))

export const RemoteWrapper = () => {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <MemeGenerator />
    </Suspense>
  )
}
