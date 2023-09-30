import { randomBytes } from 'node:crypto'
import { argv } from 'node:process'

const len = argv.at(-1).split('=').at(-1)

console.log('Copy Generated ⚙️⚙️⚙️ Password: \n')

try {
  if (!Number.isFinite(+len)) {
    throw new Error(`💥💥💥 Got ${len}, but input must be a number, i.e. 32`)
  }

  console.log(
    `🔥🔥: ${randomBytes(Number(len)).toString('hex')}`.padStart(2, '#'),
  )
} catch (error) {
  console.error(error)
}
