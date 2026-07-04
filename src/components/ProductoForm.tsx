import { Plus } from 'lucide-react'
import { useRef, useState, type FormEvent } from 'react'

interface ProductoFormProps {
  onAgregar: (nombre: string, cantidad: number, precio: number) => void
}

export function ProductoForm({ onAgregar }: ProductoFormProps) {
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('1')
  const [precio, setPrecio] = useState('')
  const inputNombreRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const cantidadNum = parseFloat(cantidad)
    const precioNum = parseFloat(precio)

    if (!nombre.trim() || !cantidadNum || cantidadNum <= 0 || !precioNum || precioNum <= 0) {
      return
    }

    onAgregar(nombre.trim(), cantidadNum, precioNum)

    setNombre('')
    setCantidad('1')
    setPrecio('')
    inputNombreRef.current?.focus()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 space-y-3"
    >
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
          Producto
        </label>
        <input
          id="nombre"
          ref={inputNombreRef}
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej. Leche"
          autoComplete="off"
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="cantidad" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            Cantidad
          </label>
          <input
            id="cantidad"
            type="text"
            inputMode="decimal"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            placeholder="1"
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label htmlFor="precio" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            Precio unitario
          </label>
          <input
            id="precio"
            type="text"
            inputMode="decimal"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="0.00"
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-semibold py-3.5 text-base transition-colors touch-manipulation"
      >
        <Plus size={20} />
        Agregar
      </button>
    </form>
  )
}
