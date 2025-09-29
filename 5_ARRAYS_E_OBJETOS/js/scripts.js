const lista = [1, 2, 3, 4, 5];

console.log(lista);
console.log(typeof lista);

const itens = [25, "Lucas", [], true, 3.14];
console.log(itens);

// 2- Mais sobre arrays
const arr = ["a", "b", "c", "d"];

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[85]);

// 3 - propriedades
const number = [5, 3, 4];

console.log(number.length);

const myName = "Lucas";
console.log(myName.length);

// 4- Metodos
const numeros = [5, 3, 8];
const otherNumbers = [1, 2, 3];

const allNumbers = numeros.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// 5 - Objeto

const person = {
  name: "Lucas",
  age: 26,
};

console.log(person.name);
console.log(person.age);
console.log(typeof person);

// 6- Criando e deletando propriedades
const car = {
  engine: 2.0,
  brand: "VW",
  model: "Tiguan",
  km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km; //Deletando propriedade do objeto
console.log(car);

// 7 - Mais sobre objetos

const obj = {
  a: "texto",
  b: true,
};

console.log(obj instanceof Object);

const obj2 = {
  c: [],
};

Object.assign(obj2, obj); //copiando valor do 'obj' em 'obj2'

console.log(obj2);

console.log(obj);

// 8 - Mais sobre objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - Mutação
const a = {
  name: "Matheus",
};

const b = a;

console.log(a === b);

a.age = 31;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

//  10 - loop em array

users = ["Lucas", "Matheus", "João", "Antonio"];

for (i = 0; i < users.length; i++) {
  console.log(`Listando o usuário: ${users[i]}`);
}

// 11 - Push e Pop (adicionar e remover ultimo itens em uma lista)

const array = ["a", "b", "c"];

array.push("d");

console.log(array);

array.pop();
console.log(array);

const itensRemovidos = array.pop(); // remove ultimo item da lista e salva em uma variável
console.log(itensRemovidos);

console.log(array);

array.push("x", "y", "z"); //adicionando varios itens ao final da lista
console.log(array);

// 12 - Shift e Unshift (Remover e adicionar primeiro elemento a lista)

const letters = ["a", "b", "c"];

const removedLetter = letters.shift(); //remove primeiro item da lista
console.log(removedLetter);

console.log(letters);

letters.unshift("w", "x", "y"); //adiciona varios itens nas primeiras posições do array

letters.unshift("z"); // adiciona apenas um item na primeira posição do array

console.log(letters);

// 13 - indexOf lastIndexOf

const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão")); //retorna -1 para itens não encontrados na lista

// 14 - slice

const testeSlice = ["a", "b", "c", "d", "e", "f"];
console.log("Array inicial:", testeSlice);

const subArray = testeSlice.slice(2, 4); //pega o valor do indice 2 até o 4 sem retornar o ultimo indice
console.log(subArray);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20); //Quando itens não existem retorna uma lista vazia
console.log(subArray3);

const subArray4 = testeSlice.slice(2); //Retorna todos o itens da lista a partir do indice 2
console.log(subArray4);

// 15- forEach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
  console.log(`O numero da lista é ${numero}`);
});

const posts = [
  { title: "Primeiro post", category: "PHP" },
  { title: "Segundo post", category: "JavaScript" },
  { title: "Terceiro post", category: "Python" },
];

// console.log(posts[0].title) //teste acessando array diretamente

posts.forEach((post) => {
    console.log(`Exibindo o post ${post.title}, da categoria ${post.category}`)
});

