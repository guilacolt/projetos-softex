const TextEditor = require('./editor');

// Criando os observadores observadores
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

// Colocando e removendo as linhas
calcular.insertLine();
calcular.removeLine();

//inscrevendo os observadores
calcular.subscribe(Observer1);
calcular.subscribe(Observer2);
calcular.subscribe(Observer3);

//desiscrevendo os observadores 
calcular.unsubscribe(Observer2);
calcular.unsubscribe(Observer3);