import express from "express"
import controller from "./controller/tips-controller.js"
import database from "./database/db.js"

const port = 2022
const app = express()

app.use(express.json())

controller(app, database)

app.listen(port, ()=>{
    console.log(`Servidor na porta http://localhost:${port}`);
})

export default app