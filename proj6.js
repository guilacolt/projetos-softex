var banco = {
    conta:31,
    saldo:527,
    tipo_de_conta: "poupança",
    agencia:1313,

    buscar_saldo: function() {
        return console.log(banco.saldo)
    },
    deposito: function(dep){
        banco.saldo = banco.saldo + dep
        return console.log(banco.saldo)
    },
    saque: function(saq){
        banco.saldo = banco.saldo - saq
        return console.log(banco.saldo)
    },
    numconta: function(){
        return console.log(banco.conta)
    },
    // lembrar de colocar a vírgula depois dos meus segundos objetos dentro de banco.
};

banco.buscar_saldo();
banco.deposito(78);
banco.saque(220);
banco.numconta();