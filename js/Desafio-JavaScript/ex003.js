
// -Boletim escolar
// Crie um programa que classifique o resultado de um aluno com base na nota:
// • Nota maior ou igual a 70 → "Aprovado".
// • Nota entre 50 e 69 → "Recuperação".
// • Nota menor que 50 → "Reprovado"

let notaFinal = 80

// if(notaFinal >= 70){
//     console.log("Aluno Aprovado")
// }
// else if(notaFinal >= 50 && notaFinal < 70){
//     console.log("Recuperação")
// }
// else{
//     console.log("Aluno Reprovado")
// }

if (notaFinal < 50){
    console.log("Reprovado")
}
else if (notaFinal < 70){
    console.log("Recuperação")
}
else{
    console;log("Aprovado")
}