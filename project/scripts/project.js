document.addEventListener('DOMContentLoaded', () => {
    const currentYearElement = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    const lastModifiedElement = document.getElementById("last-modified");
    const lastModified = new Date(document.lastModified).toLocaleString();
    lastModifiedElement.textContent = `Last modified: ${lastModified}`;
    
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    const menuLinks = document.querySelectorAll('nav ul li a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            const targetId = link.getAttribute('href'); // Obtener el ID del destino del enlace
            const targetElement = document.querySelector(targetId); // Buscar el elemento con el ID correspondiente
            if (targetElement) {
                // Desplazar suavemente a la posición del elemento
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
            navList.classList.remove('show'); // Ocultar el menú después de hacer clic en un enlace
        });
    });
});
