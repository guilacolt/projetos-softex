const Computador = require ('./class');  

class Pc extends Computador {  
    constructor(ram, hdd, cpu, type) {  
        super(ram, hdd, cpu, type);  
        
    }  
    toString() {  
        return JSON.stringify(this);  
    }  
}  
module.exports = Pc;