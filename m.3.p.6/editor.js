const readline = require('readline-sync');

class Editor {
    constructor() {
        this.texto = ["meu nome e"];
        this.observers = [];
    }
}

class TextEditor extends Editor {

    insertLine () {
        if (this.texto.indexOf == "EOF"){
            console.log ("Edição finalizada!")
        }

        else {
            this.notify("open");
            let lineNumber = readline.questionInt("Qual a linha na qual é prentendido adicionar o texto: [n]\n");
            let palavra = readline.question("Qual o texto que você quer adicionar:\n");
            this.texto.splice (lineNumber, 0, palavra);
            this.notify("save");
            return console.log (this.texto);
        }
    }

    removeLine () {
        this.notify("open");
        let lineNumber = readline.questionInt("Qual a linha que você quer remover:\n");
        let numeroDeElementos = readline.questionInt("Qual a quantidade de elementos a serem removidos:\n");
        this.texto.splice(lineNumber, numeroDeElementos);
        this.notify("save"); 
        return console.log (this.texto);
    }

    subscribe(fn) {
        this.observers.push(fn);
    }
    
    unsubscribe(fnToRemove) {
        this.observers = this.observers.filter( fn => {
            if(fn != fnToRemove)
            return fn
        })
    }
    
    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

module.exports = TextEditor;