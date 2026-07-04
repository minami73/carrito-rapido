import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

const STORAGE_KEY = 'carrito-rapido:tema'

function prefiereOscuro() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function useTheme() {
  const [tema, setTema] = useLocalStorage<'claro' | 'oscuro'>(
    STORAGE_KEY,
    prefiereOscuro() ? 'oscuro' : 'claro',
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', tema === 'oscuro')
  }, [tema])

  const toggleTema = () => {
    setTema((prev) => (prev === 'oscuro' ? 'claro' : 'oscuro'))
  }

  return { tema, toggleTema }
}
