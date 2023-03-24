const express = require('express')
const app = express()
const port = 3000

// Configuração do middleware para o Express
app.use(express.json())

// Dados de exemplo
const alunos = [  { id: 1, nome: 'Alice', idade: 20 },  { id: 2, nome: 'Bob', idade: 21 },  { id: 3, nome: 'Charlie', idade: 22 },]

// Rotas para as operações CRUD

// Listar todos os alunos
app.get('/alunos', (req, res) => {
  res.status(200).json(alunos)
})

// Buscar um aluno pelo ID
app.get('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const aluno = alunos.find(a => a.id === id)
  if (aluno) {
    res.status(200).json(aluno)
  } else {
    res.status(404).send('Aluno não encontrado')
  }
})

// Criar um novo aluno
app.post('/alunos', (req, res) => {
  const aluno = req.body
  aluno.id = alunos.length + 1
  alunos.push(aluno)
  res.status(201).json(aluno)
})

// Atualizar um aluno pelo ID
app.put('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const alunoIndex = alunos.findIndex(a => a.id === id)
  if (alunoIndex === -1) {
    res.status(404).send('Aluno não encontrado')
  } else {
    const novoAluno = req.body
    novoAluno.id = id
    alunos[alunoIndex] = novoAluno
    res.status(200).json(novoAluno)
  }
})

// Deletar um aluno pelo ID
app.delete('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const alunoIndex = alunos.findIndex(a => a.id === id)
  if (alunoIndex === -1) {
    res.status(404).send('Aluno não encontrado')
  } else {
    alunos.splice(alunoIndex, 1)
    res.status(200).send('Aluno deletado com sucesso')
  }
})

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
