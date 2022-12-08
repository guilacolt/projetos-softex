const TextEditor = require('./editor');

function Observer1 (data){ 
    let observer = data 
    console.log (observer);
} 

function Observer2 (data){ 
    let observer = data 
    console.log (observer);
}

function Observer3 (data){ 
    let observer = data 
    console.log (observer);
}

let calcular = new TextEditor ();

calcular.insertLine();
calcular.removeLine();

calcular.subscribe(Observer1);
calcular.subscribe(Observer2);
calcular.subscribe(Observer3);

calcular.unsubscribe(Observer2);
calcular.unsubscribe(Observer3);