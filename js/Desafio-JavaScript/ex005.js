// -Classificação de idade
// Crie um programa que classifique a idade de uma pessoa:
// • 0 a 12 anos → "Criança".
// • 13 a 17 anos → "Adolescente".
// • 18 a 59 anos → "Adulto".
// • 60 anos ou mais → "Idoso".

let idadePessoa = 55;

if (idadePessoa < 12) {
  console.log("Criança");
} else if (idadePessoa > 13 && idadePessoa <= 17) {
  console.log("Adolescente");
} else if (idadePessoa > 18 && idadePessoa <= 59) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}
