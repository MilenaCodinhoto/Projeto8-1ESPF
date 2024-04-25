//declarando as variaveis

let p1 = prompt("digite seu nome");
let p2 = prompt("digite seu poder");
let p3 = prompt("digite o nome de um vilão");
let p4 = prompt("digite um lugar");
let msg = document.getElementById("msg");

msg.innerHTML = `olá ${p1}, o seu poder é ${p2} e você vai enfrentar o/a ${p3} no/em ${p4}`
