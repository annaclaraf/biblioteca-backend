import { Router }  from 'express'
import { CreateObraController } from "./controllers/CreateObraController"

const routes = Router()

const createObraController = new CreateObraController()

routes.post('/obras', createObraController.handle)

export { routes }