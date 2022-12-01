class Computador {
    constructor (ram, hdd, cpu, type) {
        this.ram = ram || 0; 
        this.hdd = hdd || 0;
        this.cpu = cpu || 0;
        this.type = type || "";
    }

}

module.exports = Computador; 