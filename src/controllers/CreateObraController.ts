import { Request, Response } from "express"
import { CreateObraService } from "../services/CreateObraService";

class CreateObraController {
    async handle(request: Request, response: Response){
        const { titulo, editora, foto, autores } = request.body;

        const createObraService = new CreateObraService()

        const obra = await createObraService.execute({titulo, editora, foto, autores})

        return response.json(obra)
    }
}

export{ CreateObraController }