// 4.- splice2 Crea un codi JS que a l’array introduït li elimini el 2n element i afegeixi dos
// elements nous, “Doe” i 3.1415 en aquella posició

function customSplice(su) {
    if(typeof su !== 'object') {
        return new Error()
    }

    su.splice(2, 1, ['Doe', 3.1415])
    return su
}

console.log(customSplice([1, 2, 3, 4, 5]))
