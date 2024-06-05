document.addEventListener('DOMContentLoaded', () => {
    const currentYearElement = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    const lastModifiedElement = document.getElementById("last-modified");
    const lastModified = new Date(document.lastModified).toLocaleString();
    lastModifiedElement.textContent = `Last modified: ${lastModified}`;
});
