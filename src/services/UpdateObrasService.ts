import { getCustomRepository } from "typeorm"
import { ObrasRepository } from "../repositories/ObrasRepository"
import { Obras } from "../entities/Obras"

interface IObras {
    id: string
    titulo: string 
    editora: string
    foto: string
    autores: string
}

class UpdateObrasService {
  async execute({id, titulo, editora, foto, autores}: IObras) {
    const obrasRepository = getCustomRepository( ObrasRepository )

    const obras = await obrasRepository.findOne({id})

    if(!obras){
      throw new Error("Erro! Obra não encontrada")
    }

    const obra = await obrasRepository
    .createQueryBuilder()
    .update(Obras)
    .set({titulo, editora, foto, autores})
    .where({id})
    .execute()

    return obra

  }
}

export { UpdateObrasService }