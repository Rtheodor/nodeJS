const express = require("express");

const app =  express();
const contatos = ['rafael', 'camila', 'isis', 'flora'];


app.get("/",(req,res) =>{
     return res.json(contatos);
});

app.get("/contato/:id", (req, res) => {
    const { id } = req.params;
    return res.json({
        
        nome: contatos[id]
        
    });
});

app.listen(8080, ()=>{
    console.log("Servidor iniciado na porta 8080!")
})