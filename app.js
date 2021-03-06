const express = require("express");

const app =  express();

app.get("/",(req,res) =>{
    res.send("Pagina de contato 1 - agora sim!");
});

app.listen(8080, ()=>{
    console.log("Servidor iniciado na porta 8080!")
})