//chamar o express e body-parser
const bodyParser = require("body-parser")
const express = require("express")

const app = express()
const PORT = 3000;

app.use(bodyParser.json())

let tarefas[
    {id:1, descrição:"Estudar NodeJs"}
    {id:2, descrição:"Criar API com Express"}
];

app.get('/tarefas', )