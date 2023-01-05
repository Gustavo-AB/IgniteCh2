import { Request, Response } from "express"
import { listSpecificationUseCase } from "./listSpecificationUseCase";



class ListSpecificationController {
    constructor(private listSpecification: listSpecificationUseCase){}

    handle(request:Request, response:Response){
        const all = this.listSpecification.execute()

        return response.json(all)
    }
}