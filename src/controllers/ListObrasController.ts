import { Request, Response } from "express"
import { ListObrasService } from "../services/ListObrasService"

class ListObrasController {
  async handle(request: Request, response: Response) {
    const listObrasService = new ListObrasService()

    const obras = await listObrasService.execute()

    return response.json(obras)
  }
}

export { ListObrasController }