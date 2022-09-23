const Sequelize = require('sequelize')
const sequelize = new Sequelize("db", "root", "3008",{
    host: "localhost",
    dialect:"mysql",
});
sequelize.authenticate().then(function(){
    console.log("Server is live");
}).catch(function(erro){
    console.log(erro)
})