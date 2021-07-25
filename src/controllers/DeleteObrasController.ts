import { Request, Response } from "express"
import { DeleteObrasService } from "../services/DeleteObrasService"

class DeleteObrasController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const deleteObrasService = new DeleteObrasService()

    await deleteObrasService.execute(id)

    return response.json("Obra deletada com sucesso!")
  }
}

export { DeleteObrasController }