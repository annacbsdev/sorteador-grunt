document.addEventListener('DOMContentLoaded', function(){

document.getElementById('sorteador').addEventListener('submit', function(e){
    e.preventDefault();
    let numeroMaximo = document.getElementById('numero-maximo').value;
    numeroMaximo = parseInt(numeroMaximo);

    let numeroAleatorio = Math.random() * numeroMaximo + 1;
    document.getElementById('resultado').innerText = Math.floor(numeroAleatorio);
    document.querySelector('.resultado').style.display = "block"

})

})