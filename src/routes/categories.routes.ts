import { Router, Request, Response } from "express"
import { CategoryRepository } from "../modules/cars/repositories/implementations/CategoriesRepository"
import { CreateCategoryUseCase } from "../modules/cars/useCases/createCategoty/CreateCategoryUseCase"
import { createCategoryController } from "../modules/cars/useCases/createCategoty"
import { listCategoryController } from "../modules/cars/useCases/listCategory"
 
const categoriesRoutes = Router()

categoriesRoutes.post("/", (request:Request, response:Response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/", (request:Request, response:Response) => {
    return listCategoryController.handle(request, response)
})

export { categoriesRoutes }