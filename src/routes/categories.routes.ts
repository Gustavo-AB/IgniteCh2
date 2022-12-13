import { Router, Request, Response } from "express"
import { CategoryRepository } from "../repositories/CategoriesRepository"
import { CreateCategoryService } from "../service/CreateCategoryService"
 
const categoriesRoutes = Router()
const categoryRepository = new CategoryRepository()



categoriesRoutes.post("/", (request:Request, response:Response) => {
    const { name, description } = request.body
    const createCategoryService = new CreateCategoryService(categoryRepository)

    createCategoryService.execute({ name, description })

    return response.status(201).send()
})

categoriesRoutes.get("/", (request:Request, response:Response) => {
    const listCategories = categoryRepository.list()

    return response.status(200).json(listCategories)
})


export { categoriesRoutes }