import { Router, Request, Response } from "express"
import { createCategoryController } from "../modules/cars/useCases/createCategoty"
import { listCategoryController } from "../modules/cars/useCases/listCategory"
import multer from "multer" 
import { importCategoryController } from "../modules/cars/useCases/importCategory"


const categoriesRoutes = Router()
const upload = multer({
  dest:"./tmp"
})

categoriesRoutes.post("/", (request:Request, response:Response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/", (request:Request, response:Response) => {
    return listCategoryController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file"),(request:Request, response:Response) => {

  return importCategoryController.handle(request, response)
})

export { categoriesRoutes }