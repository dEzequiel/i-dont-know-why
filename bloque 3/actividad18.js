// 18.- capCuaArray Escriu un codi JS que donat un array de números, retalli els tres primers
// elements de l’array i els col·loqui al final en ordre invertit.
// Exemple: [1,5,8,3,4] → [3,4,8,5,1] splice()

function capCuaArray(valor) {
  let highestToLowest = valor.slice(0, 3).sort((a, b) => b - a);

  let v = valor.splice(0, 3);
  highestToLowest.forEach((element) => {
    valor.push(element);
  });
  return valor;
}

console.log(capCuaArray([1, 2, 3, 4, 5, 6]));
