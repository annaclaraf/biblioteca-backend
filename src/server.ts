import express from 'express'; //importando o express

const app = express()

app.get("/", (req, res) =>{
    return res.json({
        message: "rota get"
    })
})

app.post("/", (req, res) =>{
    return res.json({
        message: "rota post"
    })
})

app.listen(3333, () => console.log("server is runing"))