import { Especification } from "../model/Especification"



export interface ICreateEspecificationDTO {
    name:string,
    description:string
}

export interface IEspecificationsRepository {
    findByName(name:string):Especification
    list():Especification[]
    create({
        name,
        description
    }:ICreateEspecificationDTO)
}