const Pato = require('./Pato');

var pato = new Pato();
som = pato.quaqua();
situacao = pato.voar();
console.log(som);
console.log(situacao);

const AdapterPato = require('./Adapter');

var pato2 = new AdapterPato();
som = pato2.cocorico();
situacao = pato2.voar();
console.log(som);
console.log(situacao);