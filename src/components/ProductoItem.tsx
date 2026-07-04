import { Trash2 } from 'lucide-react'
import type { Producto } from '../types/producto'
import { formatearMoneda } from '../utils/formato'

interface ProductoItemProps {
  producto: Producto
  onEliminar: (id: string) => void
}

export function ProductoItem({ producto, onEliminar }: ProductoItemProps) {
  const subtotal = producto.cantidad * producto.precio

  return (
    <li className="flex items-center justify-between gap-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm px-4 py-3 animate-fade-in transition-all duration-200">
      <div className="min-w-0 flex-1">
        <p className="font-medium text-gray-900 dark:text-gray-100 truncate">{producto.nombre}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {producto.cantidad} × {formatearMoneda(producto.precio)} ={' '}
          <span className="font-semibold text-gray-700 dark:text-gray-300">{formatearMoneda(subtotal)}</span>
        </p>
      </div>
      <button
        type="button"
        onClick={() => onEliminar(producto.id)}
        aria-label={`Eliminar ${producto.nombre}`}
        className="flex-shrink-0 p-2.5 rounded-xl text-red-500 dark:text-red-400 active:bg-red-50 dark:active:bg-red-950/40 transition-colors touch-manipulation"
      >
        <Trash2 size={20} />
      </button>
    </li>
  )
}
