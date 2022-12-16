import { EspecificationRepository } from "../repositories/EspecificationsRepository";


interface IRequest {
    name:string
    description:string
}


export class CreateEspecificationService {

    constructor(private especificationsRepository: EspecificationRepository){}

    execute({ name, description }:IRequest){
        const especificationAlreadyExists = this.especificationsRepository.findByName(name)

        if(especificationAlreadyExists){
            throw new Error("Especification already exists!")
        }

        this.especificationsRepository.create({ name, description })
    }
}