// 1- Criando uma função

function minhaFuncao() {
  console.log("Testando a função");
}

minhaFuncao();

const minhaFuncaoEmVariavel = function () {
  console.log("Função em uma variável");
};

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
  console.log(`Imprimindo o texto: ${txt}`);
}

funcaoComParametro("Chamando a função");

// 2- Return

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
  return n1 + n2;
}

const resultado = soma(a, b);
console.log(resultado);

console.log(soma(c, d));

//  3- Escopo da função

let y = 10;

function testandoEscopo() {
  let y = 20;
  console.log(`Dentro da função o valor de Y é: ${y}`);
}

testandoEscopo();

console.log(`Fora da função o valor de Y é: ${y}`);

// 4- Escopo aninhado

let m = 10;

function escopoAninhado() {
  let m = 20;

  if (true) {
    let m = 30;

    if (true) {
      let m = 40;
      console.log(m);
    }
    console.log(m);
  }
  console.log(m);
}

escopoAninhado();
console.log(m);

// 5- arrow function

const testeArrow = () => {
  console.log("Essa é uma arrow function");
};

testeArrow();

const parOuImpar = (n) => {
  if (n % 2 === 0) {
    console.log("Numero par");
    return;
  }

  console.log("Numero impar");
};

parOuImpar(10);
parOuImpar(5);

// 6 - Mais sobre arrow function

const potencia = (x) => {
  return x * x;
};

console.log(potencia(2));

const potencia2 = (x) => x * x;

console.log(potencia2(12));
console.log(potencia2(5));

// 7 - parametros opcionais

const multiplication = function (m, n) {
  if (n === undefined) {
    return m * 2;
  } else {
    return m * n;
  }
};

console.log(multiplication(1));
console.log(multiplication(5, 10));

const greeting = (name) => {
  if (!name) {
    console.log("Olá");
    return;
  }

  console.log(`Olá ${name}`);
};

greeting("Lucas");

greeting();

const repeatText = (text, repeat = 2) => {
  for (i = 0; i < repeat; i++) {
    console.log(text);
  }
};

repeatText("Texto");

repeatText("Repete 5x", 5);

// 9 - closures

function someFunction() {
  let txt = "Alguma coisa";

  function display() {
    console.log(txt);
  }

  display();
}

someFunction();

//  10- Mais sobre closure

const multiplicacao = (n) => {
  return (m) => {
    return n * m;
  };
};

const c1 = multiplicacao(2)

console.log(c1)

console.log(c1(10));

// 11 - Recursão

const untilTen = (n, m) => {
  if(n < 10){
    console.log("N menor que 10");
  }else {
    x = n - m
    console.log(x);
    
    untilTen(x, m);
  }
}

untilTen(100, 10)

// ***Recursão infinita*****

// const run = () => {
//   console.log("Execultando...");
//   run()
// }

// run()

const factorial = (x) => {
  if(x === 0 ){
    return 1;
  }else{
    return x * factorial(x - 1)
  }
}

const num = 6;

const result = factorial(num)

console.log(`O Fatorial de ${num} é: ${result}`)