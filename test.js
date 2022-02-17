// Operador Lógico dentro do Array

const idadeComprador = 17;
const estaAcompanhado = false
const listDestinos = new Array (
    "Salvador", "São Paulo", "Rio de Janeiro", "Curitiba", "Orlando"
);

console.log("Destinos possíveis:");
console.log (listDestinos);


if (idadeComprador >= 18 || estaAcompanhado)  {
    console.log("Comprador maior de idade ou está acompanhado");
listDestinos.splice(1,1);
} else {
    console.log ("Não é maior de idade e também não está acompanhado, procure o responsável e retorne para efetuar a compra.")}
