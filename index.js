const prompt = require('prompt-sync');
const entrada = prompt();

let idade = 17;
const anoNascimento = 2007;
let anoAtual = 2024;
const nomeCompleto = "Miguel Placido Felix"

console.log("Meu nome é " + nomeCompleto + " Nascido No Ano De " + anoNascimento + " E No Ano Atual " + anoAtual + " Completo " + idade + " Anos")

anoAtual = anoAtual + 1;

console.log(anoAtual);

idade = idade + 1;
console.log(idade);

const listaDeDestinos = new Array(
  "Buenos Aires",
  "Bangkok",
  "Londres",
  "Paris",
  "Nova York",
)

var nomeComprador = entrada("Digite Seu Nome:")
var idadeComprador = entrada("Qual A Sua Idade?")


if(idadeComprador >= 18) {
  console.log("Olá senhor(a) " + nomeComprador);
  console.log("Comprador Maior De Idade");
  console.log("Destinos Disponíveis: " + listaDeDestinos);
} else {
  
  console.log("Produto Indisponível Para Menores De Idade");
   console.log("Você É De Menor")
} 