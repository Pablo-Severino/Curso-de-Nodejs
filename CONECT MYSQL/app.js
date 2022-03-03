const express = require("express");
const app = express();

 app.get("/", function (req, res){
     res.send("Sejá bem vindo ao meu App!");
 });

app.get("/sobre", function (req, res){
      res.send("Minha página sobre.");
});

app.get("/blog", function (req, res){
      res.send("Bem vindo ao meu blog.");
});

app.get("/livedeteste", function (req, res){
    res.send("BIRL!");
});

app.get("/rotaDeTeste", function (req, res){
    res.send("HAHAHAHA");
});

app.listen(8081, function(){
        console.log("Está rodando na url http://localhost:8081");
});