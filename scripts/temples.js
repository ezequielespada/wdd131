// Función para el menú hamburguesa
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const title = document.querySelector('h1');

// Añadir evento click al botón hamburguesa para mostrar el menú y ocultar el h1
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    
    // Ocultar el h1 cuando se abre el menú
    if (mainnav.classList.contains('show')) {
        title.style.opacity = '0'; // Oculta el título suavemente
    } else {
        title.style.opacity = '1'; // Muestra el título suavemente
    }
});

const yearElement = document.getElementById('currentyear');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = 'Last Modified: ' + document.lastModified;
}
