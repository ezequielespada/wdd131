// Footer
document.getElementById("last-modified").textContent = document.lastModified;
document.getElementById("current-year").textContent = new Date().getFullYear();

// Wind chill function
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1) + " °C";
    } else {
        return "N/A";
    }
}

// Variables
const temp = 30;
const windSpeed = 10;

document.getElementById("wind-chill").textContent = calculateWindChill(temp, windSpeed);
