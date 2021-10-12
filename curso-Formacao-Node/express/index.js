const express = require('express');//importante o express
const app = express();//inicializando o express e repassando esta instancia para a variavel

//Criação de rotas:
app.get("/",function(req,res){//criamos uma rota para a home e uma função que recebe dois parametros: a requisição e a resposta.
   res.send("bem vindo a pagina principal do express");//Sempre tereemos que devolver algo ao usuario(pode ser xml, json, paagina web,etc...), pois se não devolver nada, o usuario ficará "preso" em nossa rota.
});

app.get("/apps",function(req,res){//criamos uma rota para a home e uma função que recebe dois parametros: a requisição e a resposta.
   res.send("Bem vindo a pagina do APPS em nodeJS");//Devolvendo a resposta da pagina principal(web)
});

app.get("/site",function(req,res){//criamos uma rota para a home e uma função que recebe dois parametros: a requisição e a resposta.
    res.sendFile('/dsv/nodejs/curso-Formacao-Node/express/index.html');//Buscando um htnl externo para devolver como resposta para o usuário
});

app.get('/tagHTML',function(req,res){//criamos uma rota para a home e uma função que recebe dois parametros: a requisição e a resposta.
    res.send('<h1> resposta enviada com tags html dentro do express - nodeJS<h1>');//Devolvendo como resposta HTML
});

app.get('/json',function(req,res){//criamos uma rota para a home e uma função que recebe dois parametros: a requisição e a resposta.
    res.json({ nome : 'kelsey', texto : 'valor1'});//Devolvendo um json, muito utilizado em APIs
});

app.get('/ola/:nome/:empresa',function(req,res){//criamos uma rota para o /ola com dois parametros obrigatórios
    var nome = req.params.nome;//variavel que pega o que o usuario digitar no primeiro parametro
    var empresa = req.params.empresa;//variável que pega o que o usuario digitar no segundo parametro
    res.send("<h1>" + nome + " da " + empresa + "</h1>");//Devolve a resposta para o usuario com os parametros
});

app.get('/blog/:artigo?', function(req,res){//Criamos uma rota para o /blog com o parametro que não é obrigatório
    var artigo = req.params.artigo;//pegamos o que o usuario digitar
    if(artigo){//Se a variavel artigo está com conteúdo{
       res.send('<h2>o campo artigo foi preenchido com'  + artigo +  '</h2>');//é enviado a resposta para o usuário com a resposta concatenando o nome do artigo

    }else{//caso contrário, a mensagem abaixo sera exibida
      res.send('<h2> guia do programador</h2>');	  		 

    }
});

//exemplo de query params
app.get('/texto/canal', function(req,res){
var id = req.query['id'];

    if(id){
       res.send(id);
    }else{
       res.send("Nenhum id fornecido");
    }

});

app.listen(4000,function(erro){
    if(erro){//condicao para verificar se o servidor inicia com erro
	console.log('ocorreu yum erro');//se subir com erro, mostrara na console
    }else{ //Se não
	console.log('Servidor iniciado com sucesso');//Mostrara que o servidor foi startado com sucesso e estará funcionando

    }
});
