const express = require("express");

const app = express();

app.get("/", (req, res) =>{
    res.send("Olá Mundo!");
});

app.get("/contato", (req, res) =>{
    res.send("Página de contato!");
});

app.listen(8080, ()=>{
    console.log("Servidor iniciado na porta 8080!")
})