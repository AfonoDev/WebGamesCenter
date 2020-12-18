const app = require("./app.js");

const porta = 3333;

app.listen(porta, () =>{
    console.log(`Servidor rodadndo na porta ${porta}.`);
});