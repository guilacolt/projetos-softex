class Veiculos {
    constructor (modelo, marca, cor, numeroRodas){
        this.modelo = modelo || "";
        this.marca = marca || "";
        this.cor = cor || "";
        this.numeroRodas = numeroRodas || 0;
    }
}

module.exports = Veiculos;