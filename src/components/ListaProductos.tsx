import { ShoppingCart } from 'lucide-react'
import type { Producto } from '../types/producto'
import { ProductoItem } from './ProductoItem'

interface ListaProductosProps {
  productos: Producto[]
  onEliminar: (id: string) => void
}

export function ListaProductos({ productos, onEliminar }: ListaProductosProps) {
  if (productos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 text-gray-400 dark:text-gray-500">
        <ShoppingCart size={40} strokeWidth={1.5} />
        <p className="mt-3 text-base">Agrega tu primer producto</p>
      </div>
    )
  }

  return (
    <ul className="space-y-2">
      {productos.map((producto) => (
        <ProductoItem key={producto.id} producto={producto} onEliminar={onEliminar} />
      ))}
    </ul>
  )
}
