// Mostrar la última modificación
document.getElementById("last-modified").textContent = document.lastModified;

// Calcular sensación térmica
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1) + " °C";
    } else {
        return "N/A";
    }
}

// Definir los valores estáticos para la sensación térmica
const temp = 30; // Cambia esto si lo necesitas
const windSpeed = 10; // Cambia esto si lo necesitas
document.getElementById("wind-chill").textContent = calculateWindChill(temp, windSpeed);
