import { CategoryRepository } from "../repositories/CategoriesRepository"



interface IRequest {
    name:string
    description:string
}

export class CreateCategoryService {

    constructor(private categoryRepository:CategoryRepository){}

    execute({ name, description }:IRequest):void{
        const categoroyAlreadyExistis = this.categoryRepository.findByName(name)

        if(categoroyAlreadyExistis){
            throw new Error("Category already exists!")
        }

        this.categoryRepository.create({ name, description})
        }
}