import { Specification } from "../model/Specification";
import { ISpecificationsRepository } from "./ISpecificationRepository";


export class SpecificationRepository implements ISpecificationsRepository {
    private specifications:Specification[]


    constructor(){
        this.specifications = []
    }

    create({ name, description }){
        const specification = new Specification()

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        })

        this.specifications.push(specification)

        console.log(this.specifications)
    }

    list(){
        return this.specifications
    }

    findByName(name): Specification{
        const specification = this.specifications.find((myDb) => myDb.name === name)

        return specification
    }
}