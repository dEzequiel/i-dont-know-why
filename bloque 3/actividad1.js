// 1.- separats_$ Crea un codi JS que retorni els elements de l’array introduït en un String i
// separats pel simbol $

function separarPorDollar(valor) {
  if (typeof valor !== "object") {
    throw new Error("valor tiene que ser un objeto");
  }

  return valor.join(' $ ')
}

console.log(separarPorDollar(['hola', 'que', 'tal']))