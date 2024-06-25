let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumeroSorteado = [];
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario=== numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1)? 'vez.':'veces.' }`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p',' el número secreto es menor.')
    }
    else {
        asignarTextoElemento('p',' el número secreto es mayor.')
    }
    intentos ++;
    limpiarCaja();
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
   
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    if (listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles.')
    }
    else{
    if(listaNumeroSorteado.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego Del Numero Secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true)
}

condicionesIniciales();