import { Category } from "../model/Category";
import { ICategoryRepositories, ICreateCategoryDTO } from "./ICategoryRepositories";



export class PostgresCategoryRepositories implements ICategoryRepositories {
    findByName(name:string): Category {
        console.log(name)
        return null
    }

    list():Category[]{
        return null
    }

    create({name, description}:ICreateCategoryDTO) {
        console.log(name, description)
    }
}