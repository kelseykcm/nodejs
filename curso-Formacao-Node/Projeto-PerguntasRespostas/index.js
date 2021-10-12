const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

connection
    .authenticate()
    .then(() => {
        console.log("Conexão executada com sucesso")
    })
    .catch((msgerro) => {
        console.log(msgerro);
    })

app.set('view engine','ejs');//dizendo para o express utilizar o ejs
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.get("/",function(req,res){
    Pergunta.findAll({row : true, order : [
        ['ID','DESC']
    ]}).then(perguntas => {
        res.render("index",{
            perguntas : perguntas
        });
    })
});

app.get("/perguntar",function(req,res){
    res.render("perguntar");
});

app.post("/salvarpergunta",(req,res)=> {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo : titulo,
        descricao : descricao
    }).then(() => {
        res.redirect("/");
    });
    //res.send("Formulario recebido : " + titulo + " " + "descricao :" + descricao);
    //res.send("Formulario recebido");
});

app.get("/pergunta/:id",(req,res) =>{
    var id = req.params.id;
    Pergunta.findOne({
        where: {id : id}
    }).then(pergunta => {
        if(pergunta != undefined){
            
            Resposta.findAll({
                where: {perguntaId : pergunta.id },
                order : [
                    ['id','DESC']
                ]
            }).then(respostas => {
                res.render("pergunta",{
                    pergunta : pergunta,
                    respostas : respostas
                });
            });
        }else{
            res.redirect("/");
        }
    });
});

app.post("/responder",(req,res) =>{
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() =>{
        res.redirect("/pergunta/"+perguntaId);

    });
});

app.listen(8080,function(erro){
    if(erro){//condicao para verificar se o servidor inicia com erro
        console.log('ocorreu um erro');//se subir com erro, mostrara na console
    }else{ //Se não
        console.log('Servidor iniciado com sucesso');//Mostrara que o servidor foi startado com sucesso e estará funcionando

    }
});
