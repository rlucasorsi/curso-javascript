// 1- Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2 - Operações aritméticas
console.log(2 + 4);
console.log(4 - 2);
console.log(5 * 4);
console.log(10 / 5);

// 3 - Numeros especiais

console.log(typeof Infinity);
console.log(typeof -Infinity);

console.log(typeof 10 * "ada");

console.log(typeof NaN);

// 4- Strings

console.log("texto");
console.log("mais um texto");
console.log(`Outro texto`);

console.log(typeof "texto");
console.log(typeof "mais um texto");
console.log(typeof `Outro texto`);

// 5- Simbolos especiais
console.log("Texto em \n duas linhas");

// 6 - Concatenação
console.log("Meu texto " + "concatenado");

// 7 - Templates strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

// 8- Booleanos
console.log(typeof true);
console.log(typeof false);
console.log(5 > 20);

// 9 - comparações
console.log("---COMPARAÇÃO----");
console.log(5 <= 5);
console.log(5 < 5);

console.log(10 == 10);
console.log(10 == 9);

console.log(10 != 9);

// 10 - Indentico
console.log("-----IDENTICO------");
console.log(10 == "10"); //retorna true

console.log(10 === "10"); //retorna false

console.log(9 != "9");

console.log(9 !== "9");

// 11 - Operadores Lógicos
console.log("-----Operadores Lógicos------");

console.log(true && true);
console.log(true && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(5 > 2 && 3 < 4);

console.log(5 > 2 || 4 < 3);

console.log(5 > 2 && "1" === 1);

console.log(!false);
console.log(!5 > 2);

// 12-  Empty values
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);
console.log(undefined == false);

// 13 - Mudanças de tipos
console.log(5 * null);

console.log("teste" * "opa");

console.log("10" + 1);

console.log("10" - 1);
