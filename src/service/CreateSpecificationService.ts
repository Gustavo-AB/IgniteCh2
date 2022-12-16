import { SpecificationRepository } from "../repositories/SpecificationsRepository";


interface IRequest {
    name:string
    description:string
}


export class CreateSpecificationService {

    constructor(private specificationsRepository: SpecificationRepository){}

    execute({ name, description }:IRequest){
        const specificationAlreadyExists = this.specificationsRepository.findByName(name)

        if(specificationAlreadyExists){
            throw new Error("Especification already exists!")
        }

        this.specificationsRepository.create({ name, description })
    }
}