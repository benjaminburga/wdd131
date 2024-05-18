document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('last_modification').textContent = `Last Modified: ${lastModified}`;

    const temperature = 20; 
    const windSpeed = 10; 
    const conditions = "Sunny"; 

    function calculateWindChill(temp, wind) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    }

    let windChill = 'N/A';
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed).toFixed(2) + ' °C';
    }

    document.getElementById('Temperature').textContent = `${temperature} °C`;
    document.getElementById('Conditions').textContent = conditions;
    document.getElementById('Wind').textContent = `${windSpeed} km/h`;
    document.getElementById('WindChill').textContent = windChill;
});
