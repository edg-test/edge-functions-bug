// This file was added by edgio init.
// You should commit this file to source control.
import { Router, edgioRoutes } from '@edgio/core'

export default new Router()
  .always({
    edge_function: './edge-functions/main.js'
  })
  .use(edgioRoutes)
