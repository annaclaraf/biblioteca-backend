import { Router }  from 'express'
import { CreateObraController } from "./controllers/CreateObraController"
import { ListObrasController } from './controllers/ListObrasController'

const routes = Router()

const createObraController = new CreateObraController()
const listObrasController = new ListObrasController()

routes.post('/obras', createObraController.handle)
routes.get('/obras', listObrasController.handle)

export { routes }