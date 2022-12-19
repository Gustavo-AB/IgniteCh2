import { Request, Response } from 'express'
import { ListCategoryUseCase } from './listCategoryUseCase'

export class ListCategoryController {
    constructor(private listCategoriesUseCase: ListCategoryUseCase){}

    handle(request:Request, response:Response){
        const all = this.listCategoriesUseCase.execute()

        return response.json(all)
    }
}