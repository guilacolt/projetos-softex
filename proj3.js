const readline = require ('readline-sync');
const calculadora = () => {
    var num1 = Number(readline.question("Digite o primeiro numero:  "))
    var num2 = Number(readline.question("Digite o segundo numero: "))
    var oper = readline.question("Qual a operacao desejada? [+], [-], [*], [/] ")
    var res
    var resto

    if (oper == "+") {
        res = num1 + num2
        return console.log(res)  
    }
    if (oper == "-") {
        res = num1 - num2
        return console.log(res)
    }
    if (oper == "*") {
        res = num1 * num2
        return console.log(res)
    }
    if (oper =="/") {
        if (num2 == 0) {
            console.log("erro")
        }
        else {
            res = num1 / num2
            console.log(res)
            if (num1 > num2) {
                resto = num1 % num2
                console.log (resto)
            }
            else {
                resto = 0
                console.log(resto)
            }
            

        }
    }
    else {
        console.log("Coloque um operador válido")
    }
}
calculadora();