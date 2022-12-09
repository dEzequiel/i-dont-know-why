// Definir una función que muestre información sobre una cadena de texto que se le pasa como
// argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está
// formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function esUpperLowerMix(cadena) {
    if(typeof cadena != 'string') {
        return new Error('parametro no es un string')
    }

    if(cadena === cadena.toUpperCase()){
        return 'Mayuscula'
    } else if (cadena === cadena.toLowerCase()) {
        return 'Minusculas'
    }
    return 'Mix'
} 

console.log(esUpperLowerMix(1))
console.log(esUpperLowerMix('AAA'))
console.log(esUpperLowerMix('aaa'))
console.log(esUpperLowerMix('aaaAAA'))
console.log(esUpperLowerMix('aaaAAA1'))
console.log(esUpperLowerMix(true))