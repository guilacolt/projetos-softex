const readline = require('readline-sync');

class Cliente {

    receberValor1 () {

        let num1 = readline.questionInt("Digite o primeiro numero:\n");
        return num1;
    }

    receberValor2 () {

        let num2 = readline.questionInt("Digite o segundo numero:\n");
        return num2;
    }

    operacao () {

        let operacao = readline.questionInt("Digite qual operacao deseja fazer: 1 = adicao, 2 = subtracao ou 3 = multiplicacao:\n");
        return operacao 
    }
}

module.exports = Cliente; 