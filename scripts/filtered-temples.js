document.addEventListener("DOMContentLoaded", () => {
    const year = document.querySelector("#year");

    // use the date object
    const today = new Date();


    year.innerHTML = `<span>${today.getFullYear()}</span>`;

    const lastModified = document.querySelector("#lastmodified");

    lastModified.innerHTML = `<span class="highlight">Last modification: ${document.lastModified}</span>`;

    // Hamburger Toggle
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const nav = document.getElementById("mobileNav");

    hamburgerBtn.addEventListener("click", () => {
        nav.classList.toggle("open");

        // Change symbol from ☰ to ✖ and back
        const isOpen = nav.classList.contains("open");
        hamburgerBtn.innerHTML = isOpen ? "&#10005;" : "&#9776;"; // ✖ or ☰
    });

});

// Array of Temple Objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
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
        templeName: "Cebu City Philippines",
        location: "Cebu City, Philippines",
        dedicated: "2010, June, 13",
        area: 29556,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cebu-city-philippines/400x250/cebu-philippines-temple-lds-852643-wallpaper.jpg"
    },
    {
        templeName: "Adelaide Australia Temple",
        location: "Marden, South Australia",
        dedicated: "2000, June, 15",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x250/adelaide-australia-temple-lds-856093-wallpaper.jpg"
    },
    {
        templeName: "Jordan River Utah Temple",
        location: "South Jordan, Utah, United States",
        dedicated: "1981, November, 16-20",
        area: 148236,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/400x250/jordan-river-temple-lds-941302-wallpaper.jpg"
    }

];

function createTempleCard(temple) {
    let card = document.createElement("section");
  
    let name = document.createElement("h3");
    name.textContent = temple.templeName;
  
    let location = document.createElement("p");
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
  
    let dedicated = document.createElement("p");
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
  
    let area = document.createElement("p");
    area.innerHTML = `<span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft`;
  
    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
  
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);
  
    document.querySelector("#temples").appendChild(card);
}
  
function displayTemples(filteredTemples) {
    const container = document.querySelector("#temples");
    container.innerHTML = ""; // Clear existing
    filteredTemples.forEach(createTempleCard);
}
 
function filterTemples(type) {
    let filtered = [];

    switch (type) {
        case "old":
            filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
            break;
        case "new":
            filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;
        default:
            filtered = temples;
    }

    displayTemples(filtered);
}
  
document.querySelectorAll("#mobileNav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const filter = e.target.dataset.filter;
        filterTemples(filter);
    });
});

window.addEventListener("DOMContentLoaded", () => {
    displayTemples(temples);
});
  