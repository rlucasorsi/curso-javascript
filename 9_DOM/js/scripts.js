// 1- movendo pelo DOM
console.log(document.body);

console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2- selecionado por tag
const listItens = document.getElementsByTagName("li");
console.log(listItens);

// 3- selecionand por id
const title = document.getElementById("title");

console.log(title);

// 4 - selecionando por clasee
const products = document.getElementsByClassName("product");
console.log(products);

// 5- selecionando os elementos por CSS
const productQuery = document.querySelectorAll(".product");
console.log(productQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

// 6- isertBefore
const p = document.createElement("p");

const header = title.parentElement;
console.log(header);

header.insertBefore(p, title);

// 7 - appendChild
const linkList = document.querySelector("nav ul");

const li = document.createElement("li");

linkList.appendChild(li);

// 8 - replaceChild
const h2 = document.createElement("h2");

h2.textContent = "Novo Titulo";

header.replaceChild(h2, title);

//  9 - createTextNode
const myText = document.createTextNode("Novo texto criado");

console.log(myText);

const h3 = document.createElement("h3")
h3.appendChild(myText)
console.log(h3);

mainContainer.appendChild(h3)

// 10 - Trabalhando com atributos 
const firstLink = document.querySelector("a")

firstLink.setAttribute("href","https://google.com")

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank")

// 11 - altura e largura 
const footer = document.querySelector("footer")

console.log(footer.offsetHeight); //height + border
console.log(footer.offsetWidth); //width + border

console.log(footer.clientHeight); //height
console.log(footer.clientWidth); //width

// 12 - posição do elemento
const product1 = products[0]
console.log(product1.getBoundingClientRect());


// 13 - CSS com JS
mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "15px"

// 14 - Alterando estilos de varios elementos
for (const li of listItens) {
    li.style.backgroundColor = "red"
    
}