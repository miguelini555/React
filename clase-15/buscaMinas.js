function jugar(casilla) {
    if (casilla == 9) {
        document.querySelectorAll(".td th")[4].textContent = "BUM";
        document.querySelectorAll(".td th")[5].textContent = "BUM";
        document.querySelectorAll(".td th")[7].textContent = "BUM";
    } else {
        document.querySelectorAll(".td th")[casilla - 1].textContent = ":)";
    }
}