import { Router, Request, Response } from "express";
import { EspecificationRepository } from "../repositories/EspecificationsRepository";
import { CreateCategoryService } from "../service/CreateCategoryService";


export const especificationsRoutes = Router()
const especificationRepository = new EspecificationRepository()

especificationsRoutes.post("/", (request:Request, response:Response) => {
    const { name, description } = request.body
    const createEspecificationService = new CreateCategoryService(especificationRepository)

    createEspecificationService.execute({ name, description })

    return response.status(201).send()
})

especificationsRoutes.get("/", (request:Request, response:Response) => {
    const especifications = especificationRepository.list()

    return response.status(200).json(especifications)
})