//Código 1

const readline = require ('readline-sync');

var not1 = Number(readline.question("Digite sua primeira nota: "))
var not2 = Number(readline.question("Digite sua segunda nota: "))
var not3 = Number(readline.question("Digite sua terceira nota: "))

var media1 = (not1 += not2)
var media2= (not1 += not3) / 3
var res  = (media2 >= 7) ? 'PASSOU' : 'REPROVADO'
var resultado = "Você foi " + res + " com média " + media2 
console.log(resultado)


//Código 2
var n1 = Number(readline.question("Digite sua primeira nota: "))
var n2 = Number(readline.question("Digite sua segunda nota: "))

var n3 = 21 -(n1 + n2)
var resu = "Você precisa de " + n3 + " pontos para passar"
if (n3 <= 10) {
    console.log(resu)
}
else {
    console.log("Infelizmente você não tem como passar nem por um milagre!")
}

