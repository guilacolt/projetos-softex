let resultado

class Calculadora {

    soma (num1, num2) {
        resultado = num1 + num2;
        return resultado
    }

    subtracao (num1, num2) {
        resultado = num1 - num2;
        return resultado
    }

    multiplicacao (num1, num2) {
        resultado = num1 * num2;
        return resultado 
    }
}

module.exports = Calculadora;