console.log("Inicio");
setTimeout(() => {
    console.log("Me ejecute tarde");
}, 2000);
console.log("Fin");

const temporizador = setTimeout(() => {
    console.log("Nunca imprime");
}, 2000);
clearTimeaout(temporizador);
console.log("Cancele el temporizador");

window.setInterval
    let segundos = 0;
    const reloj = setInterval(() => {
        segundos = segundos+1;
        console.log("segundos = " + segundos);
        if(segundos === 10) {
            clearInterval(reloj);
        }
    }, 1000);




