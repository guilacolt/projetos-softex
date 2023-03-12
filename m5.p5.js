
var express = require('express');

var app = express();

app.listen(8080);

app.get('/',(request,response)=>{
    return response.send('Olá Mundo!');
});

app.get('/user',(request,response)=>{
    return response.send('Hello World!');
});

app.post('/', function (req, res) {
    return res.send('Esse é o post');
});

app.put('/user', function (req, res) {
    res.send('Atualizando a rota: /user');
});

app.delete('/user', function (req, res) {
    res.send('A rota: /user foi deletada');
});

/* Como rodar o código:
Primeiro criamos a rota express. Em seguida criamos as rotas com diferentes requisições. E por fim é so entrar no imnsonia as rotas sendo modificadas de acordo com a requisição */
