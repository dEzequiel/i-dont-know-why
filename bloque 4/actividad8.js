var equip_ciclista = require("./equip_ciclista");

function addCiclista() {
    const newCiclista = {
        nom: "Josh Pantano",
        born: "30/11/1995",
        height: 1.88,
        tours: 2,
        wins: 9
    };

    equip_ciclista.ciclistes.splice(1, 0, newCiclista);
    return equip_ciclista;
}

console.log(addCiclista())