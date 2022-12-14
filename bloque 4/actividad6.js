var equip_ciclista = require("./equip_ciclista");
var getAge = require("./getAge");

function filterFunction() {
    let x = equip_ciclista.ciclistes.filter(c => getAge(c.born) > 30);
    return x 
}



console.log(filterFunction())