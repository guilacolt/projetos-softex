const Sanduiche = require('./Sanduiche');

class SanduicheFrango extends Sanduiche {  
    constructor (price) {  
        super(price)
        let novoObjeto = Object.create(new Sanduiche());
        this.price = () => novoObjeto.price() + 4.50;
        console.log("Sanduíche de Frango custa $4,50");
        return this
    }  
}  

module.exports = SanduicheFrango;