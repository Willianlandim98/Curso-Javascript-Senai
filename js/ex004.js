// VERIFICAR MAIORIDADE
// RECEBER UMA IDADE
// SE A IDADE MAIOR OU IGUAL A 18 -> RETORNAR MAIOR DE IDADE
// SE NÃO FOR -> MENOR DE IDADE

const idade = 12;
const nome = "João";
const sobrenome = "Silva";

if (idade >= 18) {
  //se a condição for  verdade, tudo aqui será executado
  console.log(
    `Olá ${nome} ${sobrenome}! com ${idade} anos de idade você é de maior!!`
  )
} else {
  //se a condição for falsa, tudo aqui será executado!
  console.log(
   `Olá ${nome} ${sobrenome}! com ${idade} anos de idade você é de menor!!`
  )
}
