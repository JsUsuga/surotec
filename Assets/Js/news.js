// para bajar con scroll down
function scrollToSection() {
    document.getElementById('recientes').scrollIntoView({ behavior: 'smooth' });
}

//para ocultar barra 
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');

    if (window.scrollY > lastScrollY) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }

    lastScrollY = window.scrollY;
});
// pasa subir y cambie de color la barra
document.addEventListener("DOMContentLoaded", function () {
    let lastScrollY = window.scrollY; // Obtiene la posición inicial del scroll
    const nav = document.querySelector('nav'); // Selecciona el menú

    window.addEventListener('scroll', () => {
        
        if (window.scrollY > 200) { // Puedes ajustar el valor "200" según cuando quieras que cambie
            nav.classList.add('scrolled'); // Cambia el fondo del menú
        } else {
            nav.classList.remove('scrolled'); // Vuelve al color original si no ha desplazado
        }

        lastScrollY = window.scrollY; // Actualiza la posición del scroll
    });
});