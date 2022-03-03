const express = require("express");
const app = express();
const path = require('path');
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// Config
    // Template Engine
    const hbs = exphbs.create({defaultLayout: "main"})
    app.engine("handlebars", hbs.engine);
    app.set("view engine", "handlebars");

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    // Conexão com o Banco de dados MySql
    const sequelize = new Sequelize('test', 'root', 'Severino20660321', {
        host: "localhost",
        dialect: 'mysql'
    });

// Rotas

    app.get('/cad', function(req, res) {
        res.render("formulario")
    });

    app.post('/add', function(req, res) {
        res.send("Texto: " + req.body.titulo + " Conteudo: " + req.body.conteudo)
    });

app.listen(8081, function(){
        console.log("Está rodando na url http://localhost:8081");
});