var equip_ciclista = require("./equip_ciclista");
var getAge = require("./getAge");

function encontrarTreintanero() {
    const treintanero = equip_ciclista.ciclistes.find(c => getAge(c.born) > 30)
    return treintanero
}

console.log(encontrarTreintanero())