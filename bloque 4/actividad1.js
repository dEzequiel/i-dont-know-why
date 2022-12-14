var equip_ciclista = require("./equip_ciclista");

function imprimirNombres() {
    for(let c of equip_ciclista.ciclistes) {
        console.log(c.nom)
    }
}

imprimirNombres()