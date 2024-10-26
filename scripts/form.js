const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

function populateProducts() {
    const productSelect = document.getElementById('product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

populateProducts();

document.querySelectorAll('.rating input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedValue = document.querySelector('input[name="rating"]:checked');
        if (selectedValue) {
            console.log(`Calificación seleccionada: ${selectedValue.value}`);
        }
    });
});

// Inicializa el contador de reseñas en localStorage
if (localStorage.getItem('reviewCount') === null) {
    localStorage.setItem('reviewCount', 0);
}

// Actualiza el año actual
const yearElement = document.getElementById('currentyear');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Muestra la fecha de última modificación
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = 'Last Modified: ' + document.lastModified;
}

// Al enviar el formulario
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío normal del formulario

    const product = document.getElementById('product').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const date = document.getElementById('date').value;
    const features = Array.from(document.querySelectorAll('input[name="features"]:checked')).map(checkbox => checkbox.value);
    const reviewText = document.getElementById('review').value;
    const name = document.getElementById('name').value;

    // Crea un objeto de reseña
    const review = {
        product,
        rating,
        date,
        features,
        text: reviewText,
        name
    };

    // Guarda la reseña en localStorage
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Incrementa el conteo de reseñas
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    // Redirige a la página de confirmación
    window.location.href = 'review.html';
});
