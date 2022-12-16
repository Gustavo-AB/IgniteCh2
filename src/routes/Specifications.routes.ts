import { Router, Request, Response } from "express";
import { SpecificationRepository } from "../repositories/SpecificationsRepository";
import { CreateCategoryService } from "../service/CreateCategoryService";


export const specificationsRoutes = Router()
const specificationRepository = new SpecificationRepository()

specificationsRoutes.post("/", (request:Request, response:Response) => {
    const { name, description } = request.body
    const createSpecificationService = new CreateCategoryService(specificationRepository)

    createSpecificationService.execute({ name, description })

    return response.status(201).send()
})

specificationsRoutes.get("/", (request:Request, response:Response) => {
    const specifications = specificationRepository.list()

    return response.status(200).json(specifications)
})