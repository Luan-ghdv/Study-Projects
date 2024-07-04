let n1 = Number(window.prompt("Digite um número qualquer: "));
let n2 = Number(window.prompt("Digite outro número qualquer: "));

let soma = n1 + n2;

const text = document.getElementById("text");
text.textContent = `O valor da soma entre os números é ${soma}`;
