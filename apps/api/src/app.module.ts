import { env } from 'process'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import validationSchema from './common/utils/envs.config'
import appConfig from './common/utils/app.config'
// import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${env.NODE_ENV}.local`,
      load: [appConfig],
      validationSchema: validationSchema(),
      validationOptions: {
        abortEarly: true,
      },
      ignoreEnvFile: env.NODE_ENV === 'production',
    }),
    /**
     * Ensure your docker container is running with proper configurations i.e.
     * - Rename .env.example to either .env or .env.local and update db details among others
     *   - use pnpm -F api secret : to generate relevant secrets or passwords
     * - rename docker-compose-example.yaml to docker-compose.yaml & update any necessary info
     * - Them uncomment the MongooseModule and imports
     * @NOTE: You don't have to use mongoose, you can use typeOrm with postgres
     *         - just install relevant npm packages
     */
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configSrv: ConfigService) => {
    //     const isDev = !!configSrv.get<string>('NODE_ENV')

    //     const user = configSrv.get<string>('DB_USER')
    //     const pass = configSrv.get<string>('DB_PASS')
    //     const host = configSrv.get<string>('DB_HOST')
    //     const port = configSrv.get<string>('DB_PORT')
    //     const defaultDb = configSrv.get<string>('DB_DEFAULT')
    //     let uri = isDev
    //       ? configSrv.get<string>('DB_URI_DEV')
    //       : configSrv.get<string>('DB_URI_PROD')

    //     uri = uri
    //       .replace(/{{DB_USER}}/, user)
    //       .replace(/{{DB_PASS}}/, pass)
    //       .replace(/{{DB_HOST}}/, host)
    //       .replace(/{{DB_PORT}}/, port)
    //       .replace(/{{DB_DEFAULT}}/, defaultDb)

    //     return {
    //       uri,
    //     }
    //   },
    //   inject: [ConfigService],
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
