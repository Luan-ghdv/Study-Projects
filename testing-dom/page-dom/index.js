const titulo = document.getElementById("titulo");
titulo.textContent = "Olá, Mundo!";

const btn = document.getElementById("btn");
btn.onclick = function() {
    alert("E-mail enviado!");
}

const voltarBtn = document.getElementById("voltarBtn");
const resetarBtn = document.getElementById("resetarBtn");
const avancarBtn = document.getElementById("avancarBtn");
const numero = document.getElementById("numero");

let c = 0;

voltarBtn.onclick = function() {
    c = c - 1;
    numero.textContent = c;
}

resetarBtn.onclick = function() {
    c = 0;
    numero.textContent = c;
}

avancarBtn.onclick = function() {
    c = c + 1;
    numero.textContent = c;
}
