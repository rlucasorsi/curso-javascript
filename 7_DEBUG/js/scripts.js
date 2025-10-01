// 1 - strict
"use strict";

// opa = "teste";

const opa = "Teste";

// const undefined = 10;

// delete [].length;

// 2- console.log

const a = 2;

if (a === 2) {
  console.log("Entrou no if");
}

// 3- Debugger

let c = 1;
let d = 2;

if (c === 1) {
  c = d + 2;
}

// debugger;

for (let i = 0; i < d; i++) {
  c = c + 2;
}

console.log("Executou o loop");

// debugger;

if (c > 5) {
  c = 25;
}

// 4- Tratamento de dados
function checkNumber(n) {
  const result = Number(n);
  console.log(result);

  if (Number.isNaN(result)) {
    console.log("Não é um numero");
    return;
  }

  console.log("É um numero valido");
  return result;
}

checkNumber("10");
checkNumber("Teste");
checkNumber(5);
checkNumber({});

// 5 - exceptions
let x = 10;

if (x != 11) {
  // throw new Error("Valor diferente de 11!");
}

// 6 - try catch
try {
  soma = x + y;
} catch (error) {
  console.log(`Erro na operação: ${error}`);
}

// 7 - Finally
try {
  const value = checkNumber("10");
  console.log(value);

  if (!value) {
    throw new Error("Valor não é um numero");
  }
} catch (error) {
  console.log(`Erro ao executar: ${error}`);
} finally {
  console.log("O código foi executado");
}

// 8 - assertion
function checkArray(arr) {
  if (arr.length === 0) {
    throw new Error("Esse array está vazio");
  } else {
    console.log(`O array tem ${arr.length} elementos`);
  }
}


checkArray([1, 2, 4]);
