import { Trash2 } from 'lucide-react'
import { formatearMoneda } from '../utils/formato'

interface TotalBarProps {
  total: number
  cantidadArticulos: number
  onLimpiar: () => void
}

export function TotalBar({ total, cantidadArticulos, onLimpiar }: TotalBarProps) {
  return (
    <div className="sticky bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] px-4 py-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {cantidadArticulos} {cantidadArticulos === 1 ? 'artículo' : 'artículos'}
          </p>
          <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
            {formatearMoneda(total)}
          </p>
        </div>
        <button
          type="button"
          onClick={onLimpiar}
          disabled={cantidadArticulos === 0}
          aria-label="Limpiar todo"
          className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400 disabled:text-gray-300 dark:disabled:text-gray-600 active:bg-red-50 dark:active:bg-red-950/40 transition-colors touch-manipulation"
        >
          <Trash2 size={18} />
          Limpiar todo
        </button>
      </div>
    </div>
  )
}
