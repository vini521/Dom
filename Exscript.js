let id = document.getElementById("Fut");
console.log("O esporte de id Fut é: " + id.textContent);

let cla = document.getElementsByClassName("Basca");
console.log("O esporte da class Basca: " + cla[0].textContent);

let tag = document.getElementsByTagName("li")
console.log("O esporte da tag <li></li é: " + tag[2].textContent);

let idQS = document.querySelector("#Ten");
console.log("O esporte selecionado por Query Selector com o id Ten é: " + idQS.textContent);

let claQS = document.querySelector(".Ca");
console.log("O esporte selecionado por Query selector com a class Basca é: " + claQS.textContent);

//pegando o id da ul
let lista = document.getElementById("lista");

let h1 = document.getElementById("h1");
h1.innerHTML = "<span style='color:white'> Meus Esportes Favoritos </span>";

let novaLi = document.createElement("li");
novaLi.innerHTML = "PingPong";

lista.appendChild(novaLi);

let Li2 = document.createElement("li");
Li2.innerHTML = "Levantamento de peso";

//adicionando a li a ul
lista.appendChild(Li2);