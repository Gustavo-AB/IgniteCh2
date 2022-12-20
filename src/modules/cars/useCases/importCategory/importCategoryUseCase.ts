import fs from "fs"
import {parse} from "csv-parse"
import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository"
import { Category } from "../../model/Category"


interface IImportCategory {
    name:string,
    description:string
}

export class ImportCategoryUseCase {

    constructor(private categoryRepository: CategoryRepository){}

    loadCategory(file:Express.Multer.File):Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const categories: IImportCategory[] = []
            const stream = fs.createReadStream(file.path)
            const parseFile = parse()

            stream.pipe(parseFile)

            parseFile.on("data", async (line) => {
                const [ name, description ] = line
                categories.push({
                    name,
                    description
                })
            })
            .on("end", () => {
                resolve(categories)
            })
            .on("error", (err) => {
                reject(err)
            })

            return categories
        })
    }

    async execute(file:Express.Multer.File):Promise<void>{
        const categories = await this.loadCategory(file)
        
        categories.map(async category => {
            const { name, description } = category

            const existsCategory = this.categoryRepository.findByName(name)

            if(!existsCategory){
                this.categoryRepository.create({
                    name,
                    description
                })
            }
        })
    }
}