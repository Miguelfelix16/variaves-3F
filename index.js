let idade = 17;
const anoNascimento = 2007;
let anoAtual = 2024;
const nomeCompleto = "Miguel Placido Felix"

console.log("Meu nome é " + nomeCompleto + " nascido no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos")

anoAtual = anoAtual + 1;

console.log(anoAtual);

idade = idade + 1;
console.log(idade);

const listaDeDestinos = new Array(
  "Buenos Aires",
  "bangkok",
  "Londres",
  "Paris",
  "Nova York",
)

const idadeComprador = 18;

if(idadeComprador >= 18) {
  console.log("Comprador maior de idade");
  console.log("destinos disponíveis: " + listaDeDestinos);
} else {
  console.log("Produto Indisponível Para Menores De Idade");
   console.log("Voce é de moner")
} 