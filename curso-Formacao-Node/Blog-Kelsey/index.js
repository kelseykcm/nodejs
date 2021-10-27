const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");


//view engine
app.set('view engine','ejs');

//uso de arquivos estaticos
app.use(express.static('public'));

//configuração do body parser para aceitar arquivos de formularios
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//conexao com banco
connection
    .authenticate()
    .then(() => {
        console.log("Conectado ao banco de dados");
    }).catch((error) => {
        Console.log(error);
    })


app.use("/",categoriesController);
app.use("/", articlesController);

app.get("/", (req,res)=>{
    res.render("index");
})

app.listen(8080, () =>{
    console.log("O servidor esta rodando ")
})