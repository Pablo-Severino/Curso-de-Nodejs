const express = require("express");
const app = express();

 app.get("/", function (req, res){
     res.sendFile(__dirname +"/html/index.html");
 });

app.get("/sobre", function (req, res){
      res.sendFile(__dirname +"/html/sobre.html");
});

app.get("/blog", function (req, res){
      res.sendFile(__dirname +"/html/blog.html");
});

app.get("/ola/:nome/:cargo/:cor", function(req, res){
        res.send("<h1>Ola " +req.params.nome+ "</h1>" + "<h2>Sua profissao e: " +req.params.cargo+ "</h2>" + "<h3>Cor favorita e: " +req.params.cor+ "</h3>");
});

app.listen(8081, function(){
        console.log("Está rodando na url http://localhost:8081");
});