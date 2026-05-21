let numero1 = 5;
let numero2 = 3;
let operador = "/";

if (operador == "+") {
  let resultado = numero1 + numero2;
  console.log(`${numero1} ${operador} ${numero2} = ${resultado}`);
} else if (operador == "*") {
  let resultado = numero1 * numero2;
  console.log(`${numero1} ${operador} ${numero2} = ${resultado}`);
} else if (operador == "-") {
  let resultado = numero1 - numero2;
  console.log(`${numero1} ${operador} ${numero2} = ${resultado}`);
} else if (operador == "/") {
  if (numero2 == 0) {
    console.log("Não é possivel dividir por Zero!!");
  } else {
    let resultado = numero1 / numero2;
    console.log(`${numero1} ${operador} ${numero2} = ${resultado}`);
  }
}
