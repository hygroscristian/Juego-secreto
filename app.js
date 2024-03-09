let numeroSecreto = 0;
let intentos = 1;
let listadenumerosSorteados = []; 
let numeroMaximo = 10;

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);
        if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroDeUsuario> numeroSecreto){
            asignarTextoElemento('p','numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','numero secreto es mayor');
        }
        intentos ++;
        limpiarCajas();
    }
    return;
}

function asignarTextoElemento(elemento, texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;  
}

function limpiarCajas(){
    document.querySelector('#ValorUsuario').value ='';
}

function   generarNumeroSecreto(){
    let numerogenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numerogenerado);
    console.log(listadenumerosSorteados);
    // si ya se sortearon todos los numeros mostrar un mensaje 
    if (listadenumerosSorteados.length == numeroMaximo){
           asignarTextoElemento('p','ya se sortearon todos los numero posibles');
    } else { 
    // siel numero generado esta inluido en la lista hacemos algo 
    if (listadenumerosSorteados.includes(numerogenerado)){
       return generarNumeroSecreto();
    }
    else{
        listadenumerosSorteados.push(numerogenerado);
        return numerogenerado;
    }
  } 
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`indica in mumero del uno al  ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function ReiniciarJuego(){
    //limpiar caja
    limpiarCajas();
    //indicar mensaje de intervalo numeros 
    //generar el numero aleatorio 
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
