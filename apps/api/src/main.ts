import { NestFactory } from '@nestjs/core'

import { setup } from './app-setup'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  await setup(app)
}
bootstrap()
