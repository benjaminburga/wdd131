const currentYearElement = document.getElementById('current-year');
const currentYear = new Date().getFullYear();

currentYearElement.textContent = currentYear;

const lastModifiedElement = document.getElementById('last-modified');
const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modification: ${lastModified}`;
