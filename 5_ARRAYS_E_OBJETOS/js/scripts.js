// const lista = [1, 2, 3, 4, 5];

// console.log(lista);
// console.log(typeof lista);

// const itens = [25, "Lucas", [], true, 3.14];
// console.log(itens);

// // 2- Mais sobre arrays
// const arr = ["a", "b", "c", "d"];

// console.log(arr[0]);

// console.log(arr[2]);

// console.log(arr[85]);

// // 3 - propriedades
// const number = [5, 3, 4];

// console.log(number.length);

// const myName = "Lucas";
// console.log(myName.length);

// // 4- Metodos
// const numeros = [5, 3, 8];
// const otherNumbers = [1, 2, 3];

// const allNumbers = numeros.concat(otherNumbers);

// console.log(allNumbers);

// const text = "algum texto";

// console.log(text.toUpperCase());

// console.log(typeof text.toUpperCase);

// console.log(text.indexOf("g"));

// // 5 - Objeto

// const person = {
//   name: "Lucas",
//   age: 26,
// };

// console.log(person.name);
// console.log(person.age);
// console.log(typeof person);

// // 6- Criando e deletando propriedades
// const car = {
//   engine: 2.0,
//   brand: "VW",
//   model: "Tiguan",
//   km: 20000,
// };

// console.log(car);

// car.doors = 4;

// console.log(car);

// delete car.km; //Deletando propriedade do objeto
// console.log(car);

// // 7 - Mais sobre objetos

// const obj = {
//   a: "texto",
//   b: true,
// };

// console.log(obj instanceof Object);

// const obj2 = {
//   c: [],
// };

// Object.assign(obj2, obj); //copiando valor do 'obj' em 'obj2'

// console.log(obj2);

// console.log(obj);

// // 8 - Mais sobre objetos
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(car));

// console.log(Object.entries(car));

// // 9 - Mutação
// const a = {
//   name: "Matheus",
// };

// const b = a;

// console.log(a === b);

// a.age = 31;

// console.log(a);
// console.log(b);

// delete b.age;

// console.log(a);
// console.log(b);

// //  10 - loop em array

// users = ["Lucas", "Matheus", "João", "Antonio"];

// for (i = 0; i < users.length; i++) {
//   console.log(`Listando o usuário: ${users[i]}`);
// }

// // 11 - Push e Pop (adicionar e remover ultimo itens em uma lista)

// const array = ["a", "b", "c"];

// array.push("d");

// console.log(array);

// array.pop();
// console.log(array);

// const itensRemovidos = array.pop(); // remove ultimo item da lista e salva em uma variável
// console.log(itensRemovidos);

// console.log(array);

// array.push("x", "y", "z"); //adicionando varios itens ao final da lista
// console.log(array);

// // 12 - Shift e Unshift (Remover e adicionar primeiro elemento a lista)

// const letters = ["a", "b", "c"];

// const removedLetter = letters.shift(); //remove primeiro item da lista
// console.log(removedLetter);

// console.log(letters);

// letters.unshift("w", "x", "y"); //adiciona varios itens nas primeiras posições do array

// letters.unshift("z"); // adiciona apenas um item na primeira posição do array

// console.log(letters);

// // 13 - indexOf lastIndexOf

// const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

// console.log(myElements.indexOf("Maçã"));
// console.log(myElements.indexOf("Abacate"));

// console.log(myElements[2]);
// console.log(myElements[myElements.indexOf("Abacate")]);

// console.log(myElements.indexOf("Mamão"));
// console.log(myElements.lastIndexOf("Mamão")); //retorna -1 para itens não encontrados na lista

// // 14 - slice

// const testeSlice = ["a", "b", "c", "d", "e", "f"];
// console.log("Array inicial:", testeSlice);

// const subArray = testeSlice.slice(2, 4); //pega o valor do indice 2 até o 4 sem retornar o ultimo indice
// console.log(subArray);

// const subArray2 = testeSlice.slice(2, 4 + 1);
// console.log(subArray2);

// const subArray3 = testeSlice.slice(10, 20); //Quando itens não existem retorna uma lista vazia
// console.log(subArray3);

// const subArray4 = testeSlice.slice(2); //Retorna todos o itens da lista a partir do indice 2
// console.log(subArray4);

// // 15- forEach
// const nums = [1, 2, 3, 4, 5];

// nums.forEach((numero) => {
//   console.log(`O numero da lista é ${numero}`);
// });

// const posts = [
//   { title: "Primeiro post", category: "PHP" },
//   { title: "Segundo post", category: "JavaScript" },
//   { title: "Terceiro post", category: "Python" },
// ];

// // console.log(posts[0].title) //teste acessando array diretamente

// posts.forEach((post) => {
//     console.log(`Exibindo o post ${post.title}, da categoria ${post.category}`)
// // });

// // 16 - Includes
// const brands = ["BMW", "VW", "Fiat"];
// console.log(brands.includes("Fiat"));

// console.log(brands.includes("KIA"));

// if (brands.includes("BMW")) {
//   console.log("Há carros da marca BMW!");
// }

// // 17 - Reverse

// const reverseTest = [1, 2, 3, 4, 5];

// reverseTest.reverse()
// console.log(reverseTest);

// 18 - Trim
const trimTest = "  Testando o Trim \n";

console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length);
console.log(trimTest.trim().length);

// 19 - padstart / padend
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");
console.log(testePadEnd);

// 20 - split

const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 21 - Join
const fraseDeNovo = arrayDaFrase.join(" ");
console.log(fraseDeNovo);

const itensParaCompra = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar: ${itensParaCompra.join(", ")}.`;

console.log(fraseDeCompra);

// 22 - repeat
const palavra = "Testando";
console.log(palavra.repeat(5));

// 23 rest operator

const somaInfinita = (...arg) => {
  let total = 0;

  for (let i = 0; i < arg.length; i++) {
    total += arg[i];
  }

  return total;
};

console.log(1, 2, 3);
console.log(somaInfinita(1, 2, 4, 5, 6, 754435));

// 24 - for of

const somaInfinita2 = (...arg) => {
  let total = 0;
  for (num of arg) {
    total += num;
  }
};

somaInfinita2(1, 3, 55, 43);

// 25 - Destructuring em objetos
const userDetails = {
  firstName: "Lucas",
  lastName: "Orsi",
  job: "Programador",
};

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

const { firstName: primeiroNome } = userDetails;
console.log(primeiroNome);

// 26 - Destructuring em arrays
const myList = ["Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON (aceita apenas aspas duplas)
const myJson =
  '{"name": "Lucas", "age": 31, "skills": ["PHP", "JavaScript", "Python"]}';

console.log(myJson);
console.log(typeof myJson);

// 28 - JSON para objeto (parse) / Objeto para JSON (stringify)

const myObject = JSON.parse(myJson);
console.log(myObject);
console.log(typeof myObject);

// Json inválido
// const badJson = '{"name": Lucas, "age": 31,}'; //string sem aspas

// const myBadObject = JSON.parse(badJson)

myObject.isOpenToWork = true;
console.log(myObject);

const newJson = JSON.stringify(myObject);
console.log(newJson);
console.log(typeof newJson);
