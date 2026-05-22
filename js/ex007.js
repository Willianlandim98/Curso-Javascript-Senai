// --PROGRAMAÇÃO ORIENTADA A OBJETOS--


// let nomeAluno = "João"
// let idadeAluno = 30
// let cursoAluno = "Desenvolvimento"
// let periodoCurso = "Noite"

// console.log(nomeAluno)

const aluno = {
  nome: "Carlos",
  idade: 29,
  curso:{ 
    nomeCurso:"Desenvolvimento",
    dataTermino: "09/06/2016",
    professor: "Jefferson"
  },
  periodo: "Noturno",
}

// console.log(aluno)
// console.log(aluno.nome)
// console.log(aluno.periodo)
// console.log(aluno.curso.nomeCurso)
// console.log(aluno.curso.dataTermino)


// console.table(["Erro no servidor", "testes","testes"])

// ARRAY

const array = [1,2,3,4,5]
const frutas = ["Maça", "Banana", "Uva"]

console.log(frutas)
// console.log(frutas[2])
// console.log(frutas.length)
// console.log(typeof frutas)

frutas.push('Amora')

console.log(frutas)