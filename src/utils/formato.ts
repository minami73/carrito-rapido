const formateador = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
})

export function formatearMoneda(valor: number) {
  return formateador.format(valor)
}
