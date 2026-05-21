// VERIFICAR PELA IDADE, SE O VOTO É OBRIGATORIO, OPCIONAL OU NÃO VOTA!
// idade > 18        -> Obrigatório
// idade < 16        -> Não vota
// idade >= 16 < 18   -> Voto opcional
// idade > 65        -> Voto opcional

let idadePessoa = 70;

if (idadePessoa < 16) {
  console.log("Não vota");
} else if (idadePessoa < 18 || idadePessoa >= 65) {
  console.log("Voto Opcional!!")
} else {
  console.log("Voto Obrigatório!!")
}
