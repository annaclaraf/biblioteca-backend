import { getCustomRepository } from "typeorm"
import { ObrasRepository } from "../repositories/ObrasRepository"

class ListObrasService {
  async execute() {
    const obrasRepository = getCustomRepository( ObrasRepository )

    const obras = await obrasRepository.find()

    return obras
  }
}

export { ListObrasService }