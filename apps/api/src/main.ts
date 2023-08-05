import { env } from 'process'
import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  /// Enable url Versioning i.e. localhost:3000/v1/
  app.enableVersioning({
    type: VersioningType.URI,
  })

  /// Enable global validations
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  )

  /// Setup swagger
  const config = new DocumentBuilder()
    .setTitle('PesaSync')
    .setDescription('The PesaSync API')
    .setVersion('0.0.1')
    .addTag('pesa-sync')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  /// Setup server
  const port = env.API_PORT || 3000
  const host = env.API_HOST || 'http://localhost'
  await app.listen(port)

  const logger = new Logger('App', { timestamp: true })
  logger.log(`App Running on ${host}:${port}`)
}
bootstrap()
