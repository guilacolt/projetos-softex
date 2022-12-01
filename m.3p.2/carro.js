const Veiculos = require('./veiculos');  

class Carro extends Veiculos  {  
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {  
        super(modelo, marca, cor, numeroRodas); 
        this.numeroPortas = numeroPortas || 0;

    }  
    toString() {  
        return JSON.stringify(this);  
    }  
}  
module.exports = Carro;