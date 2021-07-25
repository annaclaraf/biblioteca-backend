import { Router }  from 'express'
import { CreateObraController } from "./controllers/CreateObraController"
import { DeleteObrasController } from './controllers/DeleteObrasController'
import { ListObrasController } from './controllers/ListObrasController'
import { UpdateObrasController } from './controllers/UpdateObrasController'

const routes = Router()

const createObraController = new CreateObraController()
const listObrasController = new ListObrasController()
const updateObrasController = new UpdateObrasController()
const deleteObrasController = new DeleteObrasController()

routes.post('/obras', createObraController.handle)
routes.get('/obras', listObrasController.handle)
routes.put('/obras/:id', updateObrasController.handle)
routes.delete('/obras/:id', deleteObrasController.handle)

export { routes }