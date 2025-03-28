// Buscando elemnetos por ID
let titulo = document.getElementById("titulo");
console.log(titulo);

// Buscando elemento por classe
let descricao = document.getElementsByClassName("descricao");
console.log(descricao[0]);

//Selecionando 
let paragrafo = document.getElementsByTagName("p");
console.log(paragrafo[0]);

//selecionando pelo Query Selector 
/*# significa ID
e . significa classe */
let tituloQS = document.querySelector("#titulo");
console.log("Exibindo com Query Selector: " + tituloQS.textContent);

let paragrafoQS = document.querySelector(".descricao");
console.log("Exibindo com QS o paragrafo: " + paragrafo[0].textContent)