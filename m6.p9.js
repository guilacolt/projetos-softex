// index.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'João' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'Pedro' }
  ];
  res.json(users);
});


app.post('/api/users', (req, res) => {
  const { name } = req.body;
  const id = Math.floor(Math.random() * 1000) + 1;
  const user = { id, name };
  res.status(201).json(user);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
