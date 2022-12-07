const SanduicheFrango = require('./sanduicheFrango');

class Pepperoni extends SanduicheFrango {  
    constructor (price) {  
        super(price)
        let novoObjeto = Object.create(new SanduicheFrango());
        this.price = () => novoObjeto.price() + 0.99;
        console.log("Sanduíche com adicional de pepperoni custa R$7,49");
        return novoObjeto
    }  
}  

module.exports = Pepperoni;