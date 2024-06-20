const titulo = document.getElementById("titulo");
const container = document.getElementById("container");

titulo.textContent = "Título Principal";

function soma() {
    let n1 = Number(prompt("Digite um número qualquer: "));
    let n2 = Number(prompt("Digite outro número qualquer: "));
    
    if(n1 > n2) {
        return `O valor ${n1} é o maior valor digitado e o total é ${n1 + n2}`;
    }
    else if(n1 < n2) {
        return `O valor ${n2} é o maior valor digitado e o total é ${n2 + n1}`;
    }
    else {
        return `Os valores são iguais dos valores digitados ${n2} e o total da soma é ${n1 + n2}`;
    }
}

container.innerHTML = soma();
