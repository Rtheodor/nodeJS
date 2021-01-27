const express = require("express");

const app = express();

app.get("/", (req, res) =>{
    res.send("Olá Mundo!");
});

app.get("/contato/:id", (req, res) =>{
    const {sit} = req.query;
    const {id} = req.params;
    return res.json({
        id:id ,
        nome: "Rafael",
        sit:sit
});
});

app.listen(8080, ()=>{
    console.log("Servidor iniciado na porta 8080!")
})