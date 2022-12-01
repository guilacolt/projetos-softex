const Computador = require('./computador');

class Server extends Computador {  
    constructor(ram, hdd, cpu, type) {  
        super(ram, hdd, cpu, type);  
        
    }  
    toString() {  
        return JSON.stringify(this);  
    }  
}  
module.exports = Server;