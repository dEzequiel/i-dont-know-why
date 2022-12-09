// Realiza un programa que en función de la nota que introduzcamos, nos muestre por pantalla la
// nota equivalente en letras del estilo Notable, Insuficiente, ... A su vez, este programa debe
// almacenar hasta 5 notas y luego mostrar la media tanto con numero como con letras.

/**
 * 0 insuficiente
 * 5 suficiente
 * 7 notable
 * 10 excelente
 */

const equivalencias = {
  0: "insuficiente",
  5: "suficiente",
  7: "notable",
  10: "excelente",
};

function getEquivalencia(nota) {
  if (typeof nota != "number") {
    return new Error("nota debe de ser un numero");
  }

  if(nota > 10) {
    return new Error("nota no puede ser mayor que 10")
  }

  Object.keys(nota).forEach(eq => {
    if(eq == nota) 
        return eq
  })
}
console.log(getEquivalencia(0))
console.log(getEquivalencia(5))
console.log(getEquivalencia(7))
console.log(getEquivalencia(10))

console.log(getEquivalencia())
console.log(Object.keys(equivalencias))


