const express = require("express");
const app = express();

//dizendo para o Express usar o EJS como View Engine
app.set('view engine','ejs');

app.get("/:nome/:lang",(req,res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "hirata sistemas",
        clientes: 20
    });
});


app.listen(8080,()=>{console.log("App rodando!");});