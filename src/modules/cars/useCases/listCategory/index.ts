import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoryController } from "./listCategoryController";
import { ListCategoryUseCase } from "./listCategoryUseCase";

const categoryRepository = CategoryRepository.getInstance()
const listCategoryUseCase = new ListCategoryUseCase(categoryRepository)
const listCategoryController = new ListCategoryController(listCategoryUseCase)

export { listCategoryController }