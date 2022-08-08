import express from "express"
import controller from "./controller/tips-controller.js"
import db from "./database/db.js"

const port = 2025
const app = express()

app.use(express.json())

controller(app, db)

app.listen(port, ()=>{
    console.log(`Servidor na porta http://localhost:${port}`);
})

export default app