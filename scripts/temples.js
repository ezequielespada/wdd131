const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const title = document.querySelector('h1');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    
    if (mainnav.classList.contains('show')) {
        title.style.opacity = '0'; 
    } else {
        title.style.opacity = '1'; 
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
