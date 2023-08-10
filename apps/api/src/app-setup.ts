import { env } from 'process'
// import { randomBytes } from 'node:crypto'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import {
  INestApplication,
  Logger,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common'
import { ResponseWrapperInterceptor } from './common/interceptors/response-wrapper.interceptor'

export async function setup(app: INestApplication) {
  /// Versioning
  app.enableVersioning({
    type: VersioningType.URI,
  })

  /// global interceptors
  app.useGlobalInterceptors(new ResponseWrapperInterceptor())

  /// Validations
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
    .setTitle('Storybook With Solito')
    .setDescription('The Storybook With Solito API')
    .setVersion('0.0.1')
    .addTag('sws')
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
