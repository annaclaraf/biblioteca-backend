import { getCustomRepository } from 'typeorm'
import { ObrasRepository } from '../repositories/ObrasRepository'

interface IObraRequest{
    titulo: string;
    editora: string;
    foto: string;
    autores: string;
}

class CreateObraService {
    async execute({titulo, editora, foto, autores} : IObraRequest){
        const obrasRepository = getCustomRepository(ObrasRepository);

        const obraAlreadyExists = await obrasRepository.findOne({titulo})

        if(obraAlreadyExists){
            throw new Error("Obra já existe")
        }

        const obra = obrasRepository.create({
            titulo, editora, foto, autores
        })

        await obrasRepository.save(obra)

        return obra
    }
}

export{ CreateObraService }