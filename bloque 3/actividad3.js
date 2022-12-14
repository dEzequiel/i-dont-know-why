// Crea un codi JS que a l’array introduït li elimini el 2n element

function customSplice(su, pos) {
    if(typeof su !== 'object' || typeof pos !== 'number') {
        return new Error()
    }

    const index = su.indexOf(pos);
    if(index > -1) {
        su.splice(pos, 1);
    }

    return su
}

console.log(customSplice([1, 2, 3, 4, 5], 2))