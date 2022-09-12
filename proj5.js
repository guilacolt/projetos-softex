const readline = require ('readline-sync');


// função sem parâmetros

function mundo(){
    console.log("Bem vindos ao seu pesadelo!")
}

// função com parâmetros e retorno de valor

function calculadora(num1,num2){
    var soma = num1 + num2;
    return console.log(soma);
}
// arrow function 
var num1 = 15
var num2 = 10
var soma = num1 + num2

const resultado = () => {
    console.log(soma)
    
}

mundo();
calculadora(10,5);
resultado();

