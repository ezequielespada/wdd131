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

if (localStorage.getItem('reviewCount') === null) {
    localStorage.setItem('reviewCount', 0);
}

const yearElement = document.getElementById('currentyear');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = 'Last Modified: ' + document.lastModified;
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); 

    const product = document.getElementById('product').value;
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    const date = document.getElementById('date').value;
    const features = Array.from(document.querySelectorAll('input[name="features"]:checked')).map(checkbox => checkbox.value);
    const reviewText = document.getElementById('review').value;
    const name = document.getElementById('name').value;

    if (!product || !selectedRating) {
        alert('Por favor selecciona un producto y una calificación antes de enviar.');
        return;
    }

    const rating = selectedRating.value;

    const review = {
        product,
        rating,
        date,
        features,
        text: reviewText,
        name
    };

    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    let reviewCount = parseInt(localStorage.getItem('reviewCount'), 10);
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    window.location.href = 'review.html';
});
