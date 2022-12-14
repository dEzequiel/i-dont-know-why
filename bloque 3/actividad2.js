// 2.- concat Crea un codi JS que concateni l’array introduït a l’array [“zen”, 19, “choice”]

function customConcat(parent, children) {
  if (typeof parent !== "object" || typeof children !== "object") {
    return new Error("parameter should be objects");
  }

  for (let i = 0, len = parent.length, cLen = children.length; i < cLen; i++) {
    parent[len] = children[i];
    len++; 
  }

  return parent;
}

var parent_test = ["a", "b", "c"];
var child_test = ["zen", 19, "choice"];

console.log(customConcat(child_test, parent_test));
