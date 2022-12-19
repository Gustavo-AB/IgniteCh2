import { Category } from "../../model/Category";
import { ICategoryRepositories } from "../../repositories/ICategoryRepositories";



export class ListCategoryUseCase {
    constructor(private categoryRepository:ICategoryRepositories){}

    execute(): Category[]{
        const categories = this.categoryRepository.list()

        return categories
    }
}