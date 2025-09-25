// // 1 - Variáveis
// let nome = "Lucas";

// console.log(nome);
// console.log("Lucas");

// const idade = 32;

// console.log(idade);

// // idade = 33;

// console.log(typeof nome);
// console.log(typeof idade);

// //  2- mais sobre variavel

// //let 2teste = "inválido"
// // let @teste = "inválido"

// let a = 10,
//   b = 20,
//   c = 30;

// console.log(a, b, c);

// const nomecompleto = "Lucas Orsi";

// const nomeCompleto = "Lucas Rogerio Orsi";

// console.log(nomecompleto);
// console.log(nomeCompleto);

// let _teste = "ok";

// let $teste = "ok";

// console.log(_teste, $teste);

// // 3- Prompt
// // const age = prompt("Digite a sua idade")

// // console.log(`Você tem ${age} anos`)

// //  4- Alert

// // alert("Testando");

// // const z = 10;
// // alert(`O número é ${10}`)

// // 5- Math
// // console.log(Math.max(5, 2, 1, 10));
// // console.log(Math.floor(5.14));
// // console.log(Math.ceil(5.14));

// // //6- Console
// // console.log("mensagem");

// // console.error("Erro!")

// // console.warn("Aviso!")

// // 7- if

// const m = 10;

// if (m > 5) {
//   console.log("M é maior que 5!");
// }

// const user = "João";

// if (user === "João") {
//   console.log("O nome do usuário é João");
// }

// if (user === "Maria") {
//   console.log("Olá Maria !");
// }

// // 8 - Else

// const loggedIn = false;

// if (loggedIn) {
//   console.log("Está autenticado");
// } else {
//   console.log("Não está autenticado");
// }

// const q = 10;
// const w = 15;

// if (q > 5 && w > 20) {
//   console.log("Números mais altos");
// } else {
//   console.log("Números não são mais altos");
// }

// // else if

// if (1 > 2) {
//   console.log("Teste");
// } else if (2 > 3) {
//   console.log("Teste 2");
// } else if (3 > 2) {
//   console.log("Agora sim ");
// }

// const userName = "Lucas";
// const userAge = 31;

// if (userName === "José") {
//   console.log("Bem vindo José!");
// } else if (userName === "Lucas" && userAge === 31){
//     console.log("Bem vindo Lucas");

// } else {
//     console.log("Nenhuma condição aceita");

// }

// 10- while
// let p = 0;

// while (p < 5) {
//   console.log(`Repetindo ${p} vezes`);
//   p++
// }

// 11 - Do while
// let o = 10;

// do {
//   console.log(`Valor de ${o}`);
//   o--;
// } while (o > 1);

// 12 - For

// for (let t = 0; t < 10; t++) {
//   console.log("Repetindo algo..");
// }

// let r = 10;

// for (r; r > 0; r--) {
//   console.log(`O r está diminuindo ${r}`);
// }

// // 13- Identação
// for (let u = 0; u < 10; u++) {
//   if (u * 2 > 10) {
//     console.log(`Maior que 10`);
//   } else {
//     if (u / 2 === 0) {
//       console.log("Deu 0");
//     }
//   }
// }

// 14 - Break

for (let g = 20; g > 0; g--) {
  console.log(`O valor de g é ${g}`);
  if (g === 12) {
    console.log("O valor é 12");
    break;
  }
}

// 15- Continue

  for (let s = 0; s < 10; s++) {
    //Operador de resto = %
    if (s % 2 === 0) {
      console.log("Numero par!");
      continue;
    }
    console.log(s);
  }

// 16- Switch
const job = "Engenheiro";

switch (job) {
  case "Programdor":
    console.log("Você é um programador");
    break;
  case "Engenheiro":
    console.log("Você é um engenheiro");
    break;
  case "QA":
    console.log("Você é QA");
    break;
  default:
    console.log("Profissão não encontrada");
}

// Case 'errado

const n = 200;

switch (n) {
  case 100:
    console.log("Valor é 100");

  case 200:
    console.log("Valor é 200");

  case 100:
    console.log("Valor é 100");

  default:
    console.log("Valor inválido");
}
