let palavra = "Melhor equipe de DS";

let vogais = ['a', 'e', 'i', 'o', 'u'];
let palavraMinuscula = palavra.toLowerCase();

let caracteres = palavraMinuscula.split('');
let vogaisEncontradas = caracteres.filter(letra => vogais.includes(letra)); //função de seta, propriedade (variável auxilir)

let numero = vogaisEncontradas.length;

console.log("Texto: " + palavra);
console.log("Números totais de vogais: " + numero);
console.log("Vogais encontradas: " + vogaisEncontradas.join(", "));
