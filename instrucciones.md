Crea una aplicación web sencilla tipo "calculadora de compras" (estilo punto de venta muy básico, SOLO para ir sumando lo que llevo en el carrito antes de pasar a caja). NO genera tickets, NO procesa ventas, NO necesita backend ni base de datos. Todo vive en el navegador con estado local de React.

## Stack
- Vite + React (JavaScript o TypeScript, tú elige TS)
- Tailwind CSS para todo el estilo
- lucide-react para íconos
- Estado con useState/useReducer (sin librerías de estado externas)
- localStorage para que la lista no se pierda al cerrar la pestaña

## Scaffolding (hazlo tú de principio a fin)
1. Crea el proyecto con Vite (plantilla react-ts)
2. Instala y configura Tailwind CSS correctamente (tailwind.config, directivas en el CSS global, PostCSS)
3. Instala lucide-react
4. Deja el proyecto corriendo con `npm run dev` sin errores y sin warnings de Tailwind

## Funcionalidad
La app es de UNA sola pantalla. Voy agregando productos a una lista tipo "to-do":

- Un formulario con 3 campos: **nombre del producto**, **cantidad**, **precio unitario**
- Botón "Siguiente / Agregar": al presionarlo, el producto se agrega a la lista y el formulario se limpia y hace foco de nuevo en el campo de nombre, listo para capturar el siguiente
- También se agrega al presionar Enter
- Cada renglón de la lista muestra: nombre, cantidad × precio unitario = subtotal del renglón
- Cada renglón tiene botón para eliminarlo (ícono de basura)
- Una barra de TOTAL general fija abajo (sticky), siempre visible, que suma todos los subtotales en tiempo real
- La barra de total también muestra el conteo de artículos (número de productos)
- Botón "Limpiar todo" para empezar una compra nueva (con confirmación)

## Modelo de datos (cada producto)
{
  id: string        // crypto.randomUUID()
  nombre: string
  cantidad: number
  precio: number    // precio unitario
}
Los cálculos (subtotal por renglón y total general) NO se guardan, se computan al vuelo a partir del arreglo.

## Validación mínima
- No agregar si el nombre está vacío
- No agregar si cantidad o precio son <= 0
- Manejar decimales en el precio

## Formato y UX
- Diseño mobile-first (se usa con el celular en la mano en la tienda)
- Moneda en pesos mexicanos: Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' })
- Inputs numéricos con inputMode="decimal" para que salga el teclado numérico en el celular
- Botones grandes y táctiles

## Estética (importante: que se vea como app moderna de React)
- Fondo neutro claro (gris muy suave), tarjetas blancas con sombra sutil y bordes redondeados (rounded-xl/2xl)
- Espaciado generoso y consistente
- El TOTAL en tipografía grande y con acento de color (verde) para que resalte
- Transiciones suaves al agregar/eliminar renglones
- Estado vacío amable cuando no hay productos ("Agrega tu primer producto")
- Íconos de lucide-react: Plus para agregar, Trash2 para eliminar

## Estructura de componentes sugerida
- App: mantiene el arreglo de productos y las funciones agregar/eliminar/limpiar; sincroniza con localStorage
- ProductoForm: los 3 campos + botón agregar
- ListaProductos: mapea los renglones
- ProductoItem: muestra el renglón con su subtotal y botón eliminar
- TotalBar: barra sticky inferior con total y conteo de artículos

Entrega el proyecto completo y funcionando. Al terminar, dime cómo levantarlo.