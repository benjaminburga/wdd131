
const full = document.querySelector("#currentyear");
const modified = document.querySelector("#lastModified");

const currentDate = new Date();
const lastModified = new Date(document.lastModified);

const year = currentDate.getFullYear();
const formattedLastModified = `${lastModified.toLocaleDateString()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;

full.innerHTML = year;
modified.innerHTML = `Last modification: ${formattedLastModified}`;
