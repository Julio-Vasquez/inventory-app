import { useRef, useEffect } from 'react'

export default function SvelteWrapper() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const { default: MemeGenerator } = await import('remote/MemeGenerator')
        if (containerRef.current) {
          new MemeGenerator({
            target: containerRef.current,
          })
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

    load()
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',

        border: '1px solid red', // Para verificar que el contenedor es visible
      }}
    />
  )
}
