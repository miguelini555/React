console.log("Esto es un buscaminas");

let tabla = document.querySelector<HTMLTableElement>(".buscaminas")

if (tabla) {
    console.log(tabla.tagName);
    console.log(tabla.classList)
}

let celda = document.querySelector("td")

if(celda){
    console.log(celda.textContent)
} else {
    console.log("No existe");
}

let listaElementos = document.querySelectorAll("td")

for(const elemento of listaElementos){
    elemento.addEventListener("click", function() {
        console.log(elemento.textContent);
        console.log(elemento.classList.value);

        if (elemento.classList.contains("mina")) {
            for (const item of listaElementos) {
                item.textContent = "🔥";
                item.style.color = "gray";
            }
        }
        elemento.style.color = "gray ";
    });
}