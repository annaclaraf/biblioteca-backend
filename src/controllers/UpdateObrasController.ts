import { Request, Response } from "express"
import { UpdateObrasService } from "../services/UpdateObrasService"

class UpdateObrasController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { titulo, editora, foto, autores } = request.body

    const updateObrasService = new UpdateObrasService()

    await updateObrasService.execute({id, titulo, editora, foto, autores})

    return response.json("Obra atualizada!")
  }
}

export { UpdateObrasController }