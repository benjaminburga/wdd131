const full = document.querySelector("#currentyear");
const modified = document.querySelector("#lastModified");

const currentDate = new Date();
const lastModified = new Date(document.lastModified);

const year = currentDate.getFullYear();
const formattedLastModified = `${lastModified.toLocaleDateString()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;

full.innerHTML = year;
modified.innerHTML = `Last modification: ${formattedLastModified}`;
// Temples.js
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        // Cambiar el ícono del botón dependiendo del estado del menú
        if (navMenu.classList.contains('active')) {
            navToggle.innerHTML = '&#10005;'; // Icono de 'X'
        } else {
            navToggle.innerHTML = '&#9776;'; // Icono de hamburguesa
        }
    });
});
