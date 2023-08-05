import * as Joi from 'joi'

const validationSchema = () =>
  Joi.object({
    // APP
    API_PORT: Joi.number().default(3000),
    API_HOST: Joi.string().required(),
    WEB_URL: Joi.string().required(),
    NODE_ENV: Joi.string()
      .required()
      .valid('development', 'production', 'test', 'provision')
      .default('development'),
    // DB
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_PASS: Joi.string().default(27017),
    DB_USER: Joi.string().required(),
    DB_DEFAULT: Joi.string().required(),
    DB_URI_DEV: Joi.string().required(),
    DB_URI_PROD: Joi.string().required(),

    // JWT
    JWT_SECRET: Joi.string().required(),
    JWT_TOKEN_AUDIENCE: Joi.string().required(),
    JWT_TOKEN_ISSUER: Joi.string().required(),
    JWT_ACCESS_TOKEN_TTL: Joi.number().required(),
    JWT_REFRESH_TOKEN_TTL: Joi.number().default(86400),
  })

export default validationSchema
