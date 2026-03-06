const boton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const btnTop = document.getElementById("top-btn");


boton.addEventListener("click", () =>{
    nav.classList.toggle("open");
})


document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const id = link.getAttribute("href");
        const section = document.querySelector(id);
        section.scrollIntoView({
            behavior: "smooth"
        });

    });

});


btnTop.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
