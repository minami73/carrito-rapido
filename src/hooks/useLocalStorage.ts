import { useEffect, useState } from 'react'

export function useLocalStorage<T>(key: string, valorInicial: T) {
  const [valor, setValor] = useState<T>(() => {
    try {
      const guardado = window.localStorage.getItem(key)
      return guardado ? (JSON.parse(guardado) as T) : valorInicial
    } catch {
      return valorInicial
    }
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(valor))
  }, [key, valor])

  return [valor, setValor] as const
}
