import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationContoller } from "./createSpecificationController";


const specificationRepository = new SpecificationRepository
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)
const createSpecificationController = new CreateSpecificationContoller(createSpecificationUseCase)

export { createSpecificationController }