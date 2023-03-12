const express = require('express')
const jogos = require("./jogosRoutes.js")

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({título: "Módulo Node"})
    })


    app.use (
        express.json(),
        jogos
    )
}

module.exports = routes; 


---------------------------------------------------------------------------------------
const express = require('express')
const bodyParser = require("body-parser");
const app = express ();
const port = 8080
const routes = require("./index.js")

app.use (bodyParser.json());

routes(app)

app.listen(port, () => {
    console.log (`Serv ON na porta ${port}`)
})
-----------------------------------------------------------------------------------------
  
const express = require('express')
const router = express.Router();

router
    .get("/jogos", (req, res) => {
        console.log("Busca")
    })

    .get("/jogos/2", (req, res) => {
        console.log("Busca específica")
    })

    .post("/jogos", (req, res) => {
        console.log("Cadastro dos jogos")
    })

    .put("/jogos/2", (req, res) => {
        console.log("Atualizações")
    })

    .delete("/jogos/2", (req, res) => {
        console.log("Jogo deletado")
    })

module.exports = router;
