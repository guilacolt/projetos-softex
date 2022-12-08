const Cliente = require('./cliente');
const Calculadora = require('./corpo');

let usuario = new Cliente ();
var num1 = usuario.receberValor1();
var num2 = usuario.receberValor2();
var operacao = usuario.operacao();

class Strategy {  

    execute () {

        if  (operacao == 1) {
            const somar = new Calculadora ();
            let resultado = somar.soma (num1, num2);
            console.log ("Resultado é:", resultado);
        }
            
        if  (operacao == 2) {
            const subtrair = new Calculadora ();
            let resultado = subtrair.subtracao (num1, num2);
            console.log ("Resultado é:", resultado);
        }
            
        if  (operacao == 3) {
            const multiplicar = new Calculadora ();
            let resultado = multiplicar.multiplicacao (num1, num2);
            console.log ("Resultado é:", resultado);
        }
    } 
}

module.exports = Strategy; 