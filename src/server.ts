import express, { Request, Response, NextFunction } from 'express'; //importando o express
import "express-async-errors";

import { routes } from "./routes";
import "./database"; //importando o banco de dados

const app = express()

app.use(express.json())

app.use(routes)

//tratamento dos erros
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(3333, () => console.log("server is runing"))