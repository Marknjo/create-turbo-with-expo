import { connection } from 'mongoose'

global.afterAll(async () => {
  connection.close()
})
