const SanduicheFrango = require('./Sanduichefrango');
const Pepperoni = require('./pepperoni');
const QueijoMussarelaRalado = require('./QueijoMussarelaRalado');

var sanduicheFrango = new SanduicheFrango();
var sanduicheFrangoQueijoMussarelaRalado = new QueijoMussarelaRalado(sanduicheFrango);
var sanduicheFrangoQueijoMussarelaRaladoPepperoni = new Pepperoni(sanduicheFrangoQueijoMussarelaRalado);