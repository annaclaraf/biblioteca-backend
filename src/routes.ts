import { Router }  from 'express'
import { CreateObraController } from "./controllers/CreateObraController"
import { DeleteObrasController } from './controllers/DeleteObrasController'
import { ListObrasController } from './controllers/ListObrasController'

const routes = Router()

const createObraController = new CreateObraController()
const listObrasController = new ListObrasController()
const deleteObrasController = new DeleteObrasController()

routes.post('/obras', createObraController.handle)
routes.get('/obras', listObrasController.handle)
routes.delete('/obras/:id', deleteObrasController.handle)

export { routes }