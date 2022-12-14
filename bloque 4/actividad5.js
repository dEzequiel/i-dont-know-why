var equip_ciclista = require("./equip_ciclista");

function mapFunction() {
    return equip_ciclista.ciclistes.map(c => c.tours++);
}

mapFunction()
console.log(equip_ciclista)