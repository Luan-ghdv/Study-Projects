contador = document.getElementById("contador");
decresedBtn = document.getElementById("decresedBtn");
incresedBtn = document.getElementById("incresedBtn");
resetBtn = document.getElementById("resetBtn");

let c = 0;

decresedBtn.onclick = function() {
    c--;
    contador.textContent = c;
}

resetBtn.onclick = function() {
    c = 0;
    contador.textContent = c;
}

incresedBtn.onclick = function() {
    c++;
    contador.textContent = c;
}