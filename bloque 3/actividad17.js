// 17.- restructuraArray Escriu un codi JS que creï un Array nou agafant el primer i el darrer
// element d’un Array i col·locant-los al centre de l’Array. (Per fer aquest exercici, donarem per
// suposat que sempre se tractarà d’un Array amb un número parell de posicions)
// Exemple: [“a”, “b”, “c”, “d”, “e”, “f”] → [“b”, “c”, “a”, “f”, “d”, “e”,]

function restructuraArray(valor) {
  let f = valor.filter((v) => v !== valor[0] && v !== valor[valor.length - 1]);
  const center = f.length / 2;
  f.splice(center, 0, valor[0], valor[valor.length - 1]);
  return f;
}

console.log(restructuraArray(["a", "b", "c", "d", "e", "f"]));
