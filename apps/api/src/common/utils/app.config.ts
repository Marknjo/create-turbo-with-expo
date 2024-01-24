import { env } from 'process'
import { registerAs } from '@nestjs/config'

export default registerAs('app', () => ({
  isDev: env.NODE_ENV === 'development',
  isProd: env.NODE_ENV === 'production',
  isTest: env.NODE_ENV === 'test',
}))
