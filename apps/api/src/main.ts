import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

import { setup } from './app-setup'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  await setup(app)
}
bootstrap()
