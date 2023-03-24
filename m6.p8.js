const express = require('express')
const jogos = require("./jogosRoutes.js")

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({título: "Curso de Node"})
    })


    app.use (
        express.json(),
        jogos
    )
}

module.exports = routes; 

-----------------------------------------------------------------------------------
  const express = require('express')
const bodyParser = require("body-parser");
const app = express ();
const port = 8080
const routes = require("./index.js")

app.use (bodyParser.json());

// Utilizando o routes
routes(app)

app.listen(port, () => {
    console.log (`Aplicativo executado na porta ${port}`)
})

----------------------------------------------------------------------------
const express = require('express')
const router = express.Router();

router
    .get("/jogos", (req, res) => {
        console.log("busca")
    })

    .get("/jogos/2", (req, res) => {
        console.log("busca específica")
    })

    .post("/jogos", (req, res) => {
        console.log("Cadastro de jogos")
    })

    .put("/jogos/2", (req, res) => {
        console.log("atualização")
    })

    .delete("/jogos/2", (req, res) => {
        console.log("jogo deletado")
    })

module.exports = router;
