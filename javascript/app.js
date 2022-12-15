const fila = document.querySelector(".contenedor-carousel")
const pelicula = document.querySelector(".peliculas")

const flechaIzquierda = document.getElementById("flecha-izquierda")
const flechaDerecha = document.getElementById("flecha-derecha")



// EVENTO PARA LA FELCHA DERECHA

flechaDerecha.addEventListener("click", () => {
    fila.scrollLeft += fila.offsetWidth
})


flechaIzquierda.addEventListener("click", () => {
    fila.scrollLeft -= fila.offsetWidth
})


