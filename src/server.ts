import { categoriesRoutes } from "./routes/categories.routes";
import express from "express"
import { specificationsRoutes } from "./routes/Specifications.routes";


const app = express()
const port = 3333

app.use(express.json())
app.use("/categories", categoriesRoutes)
app.use("/specifications", specificationsRoutes)

app.listen(port, () => {
    console.log("Server is running!")
})
