const Server = require("./server");
const Pc = require("./pc");

class ComputerFactory {
    constructor (ram, hdd, cpu, type) {
        if (type === "Pc"){
            return new Pc (ram, hdd, cpu, type);
        }

        if (type === "Server"){
            return new Server (ram, hdd, cpu, type);
        }
    }
}

module.exports = ComputerFactory; 