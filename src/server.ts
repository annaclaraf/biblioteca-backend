import express from 'express'; //importando o express

import { routes } from "./routes";
import "./database"; //importando o banco de dados

const app = express()

app.use(express.json())

app.use(routes)

app.listen(3333, () => console.log("server is runing"))