/* let nome = window.prompt("Qual é o seu nome? ");
window.alert("Olá, " + nome + "! Prazer em te conhecer!"); */

let username;
let myText = document.getElementById("myText");

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myName").value;
    myText.textContent = `Olá, ${username}! Prazer em te conhecer!`;
}

