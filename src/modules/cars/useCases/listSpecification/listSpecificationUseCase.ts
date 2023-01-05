import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository"



export class listSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationsRepository){}

    execute(){
        const specifications = this.specificationRepository.list()

        return specifications
    }

}