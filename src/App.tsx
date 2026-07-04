import { Moon, Sun } from 'lucide-react'
import { useMemo } from 'react'
import { ListaProductos } from './components/ListaProductos'
import { ProductoForm } from './components/ProductoForm'
import { TotalBar } from './components/TotalBar'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useTheme } from './hooks/useTheme'
import type { Producto } from './types/producto'
import { generarId } from './utils/id'

const STORAGE_KEY = 'carrito-rapido:productos'

function App() {
  const [productos, setProductos] = useLocalStorage<Producto[]>(STORAGE_KEY, [])
  const { tema, toggleTema } = useTheme()

  const total = useMemo(
    () => productos.reduce((acc, p) => acc + p.cantidad * p.precio, 0),
    [productos],
  )

  const handleAgregar = (nombre: string, cantidad: number, precio: number) => {
    const nuevoProducto: Producto = {
      id: generarId(),
      nombre,
      cantidad,
      precio,
    }
    setProductos((prev) => [...prev, nuevoProducto])
  }

  const handleEliminar = (id: string) => {
    setProductos((prev) => prev.filter((p) => p.id !== id))
  }

  const handleLimpiar = () => {
    if (productos.length === 0) return
    const confirmado = window.confirm('¿Seguro que quieres limpiar toda la lista?')
    if (confirmado) {
      setProductos([])
    }
  }

  return (
    <div className="min-h-dvh flex flex-col bg-gray-100 dark:bg-gray-900">
      <header className="relative text-center px-4 pt-6 pb-2">
        <button
          type="button"
          onClick={toggleTema}
          aria-label={tema === 'oscuro' ? 'Activar modo claro' : 'Activar modo oscuro'}
          className="absolute right-4 top-6 p-2 rounded-xl text-gray-500 dark:text-gray-400 active:bg-gray-200 dark:active:bg-gray-800 transition-colors touch-manipulation"
        >
          {tema === 'oscuro' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Carrito Rápido</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Suma tus productos antes de pasar a caja
        </p>
      </header>

      <main className="flex-1 px-4 py-3 space-y-4 pb-4">
        <ProductoForm onAgregar={handleAgregar} />
        <ListaProductos productos={productos} onEliminar={handleEliminar} />
      </main>

      <TotalBar
        total={total}
        cantidadArticulos={productos.length}
        onLimpiar={handleLimpiar}
      />
    </div>
  )
}

export default App
