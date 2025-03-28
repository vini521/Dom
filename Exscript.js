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