// // 1 - SetTimeout
// console.log("Ainda não executou");

// // setTimeout(() => {
// //   console.log("Função assincrona");
// // }, 2000);

// console.log("Ainda não executou 2");

// // 2 - setInterval
// console.log("Ainda não começou set interval");

// // setInterval(() => {
// //   console.log("Executando função SetInterval");
// // }, 3000);

// // console.log("Ainda não executou o set interval");

// // // 3 - Promises
// // const promessa = Promise.resolve(5 + 5);
// // console.log("Algum código");

// // promessa
// //   .then((value) => {
// //     console.log(`A soma é ${value}`);
// //     return value;
// //   })
// //   .then((value) => value - 1)
// //   .then((value) => console.log(`Agora é ${value}`));

// // console.log("Outro código após promise");

// // //   4 - falha na promise
// // Promise.resolve(5 * "adad")
// //   .then((n) => {
// //     if (Number.isNaN(n)) {
// //       throw new Error("Erro na promisse");
// //     }
// //   })
// //   .catch((err) => {
// //     console.log(`Um erro ocorreu ${err}`);
// //   });

// // console.log(`PROMISE: Código após promisse error`);

// // 5 - reject
// function checkNumber(n) {
//   return new Promise((resolve, reject) => {
//     if (n > 10) {
//       resolve(`Numero é maior do que 10!`);
//     } else {
//       reject(`Numero muito baixo`);
//     }
//   });
// }

// const a = checkNumber(20);

// const b = checkNumber(2);

// a.then((v) => console.log(`O resultado é: ${v}`)).catch((err) =>
//   console.log(`Um erro ocorreu: ${err}`)
// );

// b.then((v) => console.log(`O resultado é: ${v}`)).catch((err) =>
//   console.log(`Um erro aconteceu: ${err}`)
// );

// // 6 - resolvendo varias promises
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 3000);
// });

// const p2 = Promise.resolve(10 + 10);

// const p3 = new Promise((resolve, reject) => {
//   if (30 > 10) {
//     resolve(30);
//   } else {
//     reject("Erro!");
//   }
// });

// Promise.all([p1, p2, p3])
//   .then((values) => console.log(values))
//   .catch((values) => console.log(values));

// //   7 - async functions
// async function somaComDelay(a, b) {
//   return a + b;
// }

// somaComDelay(2, 5).then((value) => {
//   console.log(`A soma dos valores é ${value}`);
// });

// console.log("Teste async");

// // 8 - async await
// function resolveComDelay() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Resolveu a promise`);
//     }, 3000);
//   });
// }

// async function chamadaAsync() {
//   console.log("Chamando a promisse e esperando o resultado");
//   const result = await resolveComDelay();
//   console.log(`O resultado chegou: ${result}`);
// }

// chamadaAsync();

// 9 - Generators
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value);
console.log(gen.next().value)
