//função de conexão com o banco
async function connect() {
    const { Pool } = require("pg"); //estrategia de conexão
    const pool = new Pool({  //DECLARANDO A VARIAVEL 
        connectionString: process.env.CONECTION_STRING //ler dados 
    });

    const client = await pool.connect();// retornar o resultado 
    console.log("Criou o Pool de conexão");
}