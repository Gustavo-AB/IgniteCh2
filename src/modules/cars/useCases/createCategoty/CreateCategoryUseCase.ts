import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository"
import { ICategoryRepositories } from "../../repositories/ICategoryRepositories"



interface IRequest {
    name:string
    description:string
}

export class CreateCategoryUseCase {

    constructor(private categoryRepository:ICategoryRepositories){}

    execute({ name, description }:IRequest):void{
        const categoroyAlreadyExistis = this.categoryRepository.findByName(name)

        if(categoroyAlreadyExistis){
            throw new Error("Category already exists!")
        }

        this.categoryRepository.create({ name, description})
    }
}