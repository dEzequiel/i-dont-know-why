var equip_ciclista = require("./equip_ciclista");

function imprimirNombresOrdenados() {
    let noms = [];
    for(let c of equip_ciclista.ciclistes) {
        noms.push(c.nom)
    }

    return noms.sort().join(',')
    
}

console.log(imprimirNombresOrdenados())