const Moto = require("./moto");
const Carro = require("./carro");

let modelos =[
    moto1 = Object.create(new Moto('S1000RR','BMW','preto',2,0)),
    moto2 = Object.create(new Moto('CBR 600RR','Honda','azul',2,0)),
    moto3 = Object.create(new Moto('MT-09','Yamaha','cinza',2,0)),
    carro1 = Object.create(new Carro('Celta','Chevrolet','cinza',4,4)),
    carro2 = Object.create(new Carro('Kombi', 'Volkswagen','branco',4,3)),
    carro3 = Object.create(new Carro('Uno','Fiat','vermelho',4,2))
]

    let impressao = Object.create(modelos)

    function represent(vetor){

    vetor.forEach((elemento) => {
        console.log("Marca: "+elemento.modelo+ ", modelo: "+elemento.marca+", cor:"+elemento.cor+", número de rodas:"
        +elemento.numeroRodas+",número de portas:"+elemento.numeroPortas);
    })

}  

represent(modelos)
represent(impressao)