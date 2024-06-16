const rolarBtn = document.getElementById("rolarBtn");
const numero = document.getElementById("numero");

rolarBtn.onclick = function() {
    const randomN = Math.floor(Math.random() * 6) + 1;
    numero.textContent = randomN;
}