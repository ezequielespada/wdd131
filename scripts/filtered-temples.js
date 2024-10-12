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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005 August 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888 May 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 17",
        area: 30659,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087.jpg"
    },
    {
        templeName: "Córdoba Argentina",
        location: "Córdoba, Argentina",
        dedicated: "2015, May, 17",
        area: 34369,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-15736.jpg"
    },
    {
      templeName: "Salta Argentina",
      location: "Salta, Argentina",
      dedicated: "2024, June, 16",
      area: 27000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48253.jpg"
    }
  ];
  
  function createTempleCard(temple) {
    const card = document.createElement('figure');
    
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';
    
    const caption = document.createElement('figcaption');
    caption.textContent = `${temple.templeName} - ${temple.location}, Dedicated: ${temple.dedicated}, Area: ${temple.area} sqft`;
    
    card.appendChild(img);
    card.appendChild(caption);
    
    return card;
  }
  
  function displayTemples(filter = "home") {
    const container = document.getElementById('temple-container');
    container.innerHTML = ''; // Clear previous content
  
    let filteredTemples = temples;
  
    switch (filter) {
      case 'old':
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        break;
      case 'new':
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
        break;
      case 'large':
        filteredTemples = temples.filter(temple => temple.area > 90000);
        break;
      case 'small':
        filteredTemples = temples.filter(temple => temple.area < 10000);
        break;
    }
  
    filteredTemples.forEach(temple => {
      container.appendChild(createTempleCard(temple));
    });
  }
  
  document.querySelectorAll('.nav-text').forEach(item => {
    item.addEventListener('click', event => {
      const filter = event.target.getAttribute('data-filter');
      displayTemples(filter);
    });
  });
  
  // Display all temples on page load
  displayTemples();
  
  // Footer logic for current year and last modified date
  const yearElement = document.getElementById('currentyear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  const lastModifiedElement = document.getElementById('lastModified');
  if (lastModifiedElement) {
    lastModifiedElement.textContent = 'Last Modified: ' + document.lastModified;
  }
  