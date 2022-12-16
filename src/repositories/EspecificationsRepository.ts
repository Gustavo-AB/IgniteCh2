import { Especification } from "../model/Especification";
import { IEspecificationsRepository } from "./IEspecificationRepository";


export class EspecificationRepository implements IEspecificationsRepository {
    private especifications:Especification[]


    constructor(){
        this.especifications = []
    }

    create({ name, description }){
        const especification = new Especification()

        Object.assign(especification, {
            name,
            description,
            created_at: new Date()
        })

        this.especifications.push(especification)

        console.log(this.especifications)
    }

    list(){
        return this.especifications
    }

    findByName(name): Especification{
        const especification = this.especifications.find((myDb) => myDb.name === name)

        return especification
    }
}