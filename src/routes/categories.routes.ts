import { Router, Request, Response } from "express"
import { CategoryRepository } from "../repositories/CategoryRepository"
 
const categoriesRoutes = Router()
const categoryRepository = new CategoryRepository()



categoriesRoutes.post("/", (request:Request, response:Response) => {
    const { name, description } = request.body

    const categoroyAlreadyExistis = categoryRepository.findByName(name)

    if(categoroyAlreadyExistis){
        return response.status(400).json({ error:"Category already exists!"})
    }

    categoryRepository.create({ name, description})

    return response.status(201).send()
})

categoriesRoutes.get("/", (request:Request, response:Response) => {
    const listCategories = categoryRepository.list()

    return response.status(200).json(listCategories)
})


export { categoriesRoutes }