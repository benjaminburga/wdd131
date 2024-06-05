document.addEventListener('DOMContentLoaded', () => {
    const currentYearElement = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    const lastModifiedElement = document.getElementById("last-modified");
    const lastModified = new Date(document.lastModified).toLocaleString();
    lastModifiedElement.textContent = `Last modified: ${lastModified}`;

    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});
