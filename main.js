const boton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

boton.addEventListener("click", () =>{
    nav.classList.toggle("open");
})

