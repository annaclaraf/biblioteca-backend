import { getCustomRepository } from "typeorm"
import { ObrasRepository } from "../repositories/ObrasRepository"

class DeleteObrasService {
  async execute(id: string) {
    const obrasRepository = getCustomRepository( ObrasRepository )

    const obras = await obrasRepository.findOne({id})

    if(!obras){
      throw new Error("Erro! Obra não encontrada")
    }

    const obra = await obrasRepository.delete(id)

    return obra
  }
}

export { DeleteObrasService }