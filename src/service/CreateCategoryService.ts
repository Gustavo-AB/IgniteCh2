import { CategoryRepository } from "../repositories/CategoriesRepository"
import { ICategoryRepositories } from "../repositories/ICategoryRepositories"



interface IRequest {
    name:string
    description:string
}

export class CreateCategoryService {

    constructor(private categoryRepository:ICategoryRepositories){}

    execute({ name, description }:IRequest):void{
        const categoroyAlreadyExistis = this.categoryRepository.findByName(name)

        if(categoroyAlreadyExistis){
            throw new Error("Category already exists!")
        }

        this.categoryRepository.create({ name, description})
    }
}