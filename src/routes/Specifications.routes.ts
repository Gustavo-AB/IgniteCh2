import { Router, Request, Response } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateCategoryUseCase } from "../modules/cars/useCases/createCategoty/CreateCategoryUseCase";
import { createSpecificationController } from "../modules/cars/useCases/createSpecifications";


export const specificationsRoutes = Router()
const specificationRepository = new SpecificationRepository()

specificationsRoutes.post("/", (request:Request, response:Response) => {
    return createSpecificationController.handle(request, response)
})

specificationsRoutes.get("/", (request:Request, response:Response) => {
    const specifications = specificationRepository.list()

    return response.status(200).json(specifications)
})