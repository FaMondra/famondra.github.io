alert ("Hola, bienvenid@ a mi página");

const btnTema = document.getElementById("btnTema");
const body = document.body;

btnTema.addEventListener("change", () => {
    body.classList.toggle("dark-mode", btnTema.checked);
});

console.log("Hola, bienvenido a mi script");
