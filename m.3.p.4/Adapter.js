const Pato = require('./Pato');
const Galinha = require('./Galinha');

class AdapterPato extends Galinha {  
    constructor (cocorico, voar) {
        super (cocorico, voar)
        let pato = new Pato();
        this.cocorico = () => "cocoricó";
        this.voar = pato.voar;
        return this
    }  
}

module.exports = AdapterPato;