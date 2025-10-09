// 1 - adicionando evento
const btn = document.querySelector("#my-button");
btn.addEventListener("click", () => {
  console.log("Clicou aqui");
});

const secondButton = document.querySelector("#btn");
function imprimirMensagem() {
  console.log("Teste");
}

secondButton.addEventListener("click", imprimirMensagem);

const thirdButton = document.querySelector("#other-btn");

thirdButton.addEventListener("click", () => {
  console.log("Removendo evento");
  secondButton.removeEventListener("click", imprimirMensagem);
});

// 3 - argumento de um evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.offsetX);
  console.log(event.pointerType);
  console.log(event.target);
});

// 4 - Propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Evento 2");
});

// 5 - removendo evento default
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Não alterou a pagina");
});

// 6 - evento de tecla
document.addEventListener("keyup", (e) => {
  console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
  console.log(`Pressionou a tecla ${e.key}`);
});

// 7 - Outros eventos de mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mouseup", () => {
  console.log("Soltou a tecla");
});

mouseEvents.addEventListener("mousedown", () => {
  console.log("Apertou a tecla");
});

mouseEvents.addEventListener("dblclick", () => {
  console.log("Click duplo");
});

// 8 - movimento do mouse
// document.addEventListener("mousemove", (e) => {
//     console.log(`No eixo X: ${e.x}`);
//     console.log(`No eixo Y: ${e.y}`);

// })

// 9 - Evento de scroll
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    console.log(`Passamos de 200px`);
  }
});

// 10 - Evento de Focus / Blur
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
  console.log(`Entrou no input`);
});

input.addEventListener("blur", (e) => {
  console.log(`Saiu no input`);
});

// 11 - evento de carregamento

window.addEventListener("load", () => {
  console.log(`A pagina carregou`);
});

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";
});

// 12 - debounce
const debounce = (f, delay) => {
  let timeout;

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      f.apply(args);
    }, delay);
  };
};

window.addEventListener(
  "mousemove",
  debounce(() => {
    console.log("Executando a cada 400ms");
  }, 400)
);
