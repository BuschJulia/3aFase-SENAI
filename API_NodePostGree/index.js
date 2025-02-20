require("dotenv").config(); //carrega as variaveis do arquivo env

const port=process.env.PORT; //armazena numero da porta

const express = require("express");
const app = express();

app.get("/", (req, resp)=>{
    resp.json({
        message:"Funcionando!"
    })
})

app.listen(port);
console.log("BackEnd rodando")

//Comandos usados: npm init -y / npm i espress / npm i body-parser / npm i pg express dotenv / npm i dotenv 