// 1 - Metodos
const animal = {
  name: "Bob",
  latir: function () {
    console.log("au au");
  },
};

console.log(animal.name);
animal.latir();

// 2 - aprofundando em métodos

const pessoas = {
  nome: "Lucas",

  getNome: function () {
    return this.nome;
  },

  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};

console.log(pessoas.nome);

console.log(pessoas.getNome());

pessoas.setNome("Joaquim");

console.log(pessoas.getNome());

// 3 - Prototype
const text = "dahahds";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(Object.getPrototypeOf(arr));
console.log(Object.getPrototypeOf(arr) === Array.prototype);

// 4- mais sobre prototype
const myObject = {
  a: "b",
};

console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - Classes basicas
const cachorro = {
  raca: null,
  patas: 4,
};

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao);
console.log(pastorAlemao.raca);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);
bulldog.raca = "Buldog";
console.log(bulldog);
console.log(bulldog.patas);

// 6 - Função como classe - função construtora
const criarCachorro = function (nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
};

const bob = criarCachorro("bob", "buldog");
console.log(bob);

const merlo = criarCachorro("Merlo", "vira-lata");
console.log(merlo);
console.log(merlo.raca);

// 7 - Funções com classe
function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("Luna", "husky");

console.log(husky);
console.log(husky.nome);

// 8 - metodos na função
Cachorro.prototype.uivar = function () {
  console.log("Auuuuuuu");
};

console.log(Cachorro.prototype);

husky.uivar();

// 9 - classe ES6
class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const pitbull = new CachorroClasse("Bily", "Pitbull");

console.log(pitbull);
console.log(Object.getPrototypeOf(pitbull));

// 10 - mais sobre classes
class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  descreverCaminhao () {
    console.log(`Este caminha tem ${this.eixos} eixos e é da cor ${this.cor}`)
  }
} 

const scania = new Caminhao(4, "Vermelho")

console.log(scania);

scania.descreverCaminhao()

Caminhao.motor = 4 // Não adiciona o metodo dessa forma quando é uma classe

const c2 = new Caminhao(6, "Azul")
console.log(c2)
console.log(c2.motor) //retorna undefined

Caminhao.prototype.motor = 4.0

const c3 = new Caminhao(6, "Rosa")

console.log(c3.motor);

// 11 - override
class Humano {
  constructor (nome, idade) {
    this.nome = nome
    this.idade = idade
  }
}

const lucas = new Humano('Lucas', 26)
console.log(lucas);

Humano.prototype.idade = 'Não definida'

console.log(lucas.idade);
console.log(Humano.prototype.idade);

// 12 - symbol
class Aviao {
  constructor (marca, turbinas) {
    this.marca = marca
    this.turbinas = turbinas
  }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = 3

const boeing = new Aviao("boeing", 4)

console.log(boeing);
console.log(boeing[asas])
console.log(boeing[pilotos])
