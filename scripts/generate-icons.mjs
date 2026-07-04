import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const rounded = path.join(__dirname, 'icon-rounded.svg')
const square = path.join(__dirname, 'icon-square.svg')

await sharp(rounded).resize(192, 192).png().toFile(path.join(root, 'public/pwa-192.png'))
await sharp(rounded).resize(512, 512).png().toFile(path.join(root, 'public/pwa-512.png'))
await sharp(rounded).resize(32, 32).png().toFile(path.join(root, 'public/favicon-32x32.png'))
await sharp(square).resize(180, 180).png().toFile(path.join(root, 'public/apple-touch-icon.png'))

console.log('Iconos generados')
