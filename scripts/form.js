
const year = document.querySelector("#year");

// use the date object
const today = new Date();


year.innerHTML = `<span>${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastmodified");

lastModified.innerHTML = `<span class="highlight">Last modification: ${document.lastModified}</span>`;

// Product Array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
  ];

// Populate Products
const select = document.getElementById("product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});


function isLocalStorageAvailable() {
    try {
        const test = '__test__';
        localStorage.setItem(test, 'ok');
        localStorage.removeItem(test);
        return true;
    } catch {
        return false;
    }
}

const form = document.getElementById('productReviewForm');

form.addEventListener('submit', function (event) {
    if (!isLocalStorageAvailable()) return;

    const review = {
        product: form.product.value,
        rating: form.rating.value,
        installationDate: form.installationDate.value,
        features: Array.from(document.querySelectorAll('input[name="features"]:checked')).map(el => el.value),
        writtenReview: form.writtenReview.value,
        userName: form.userName.value
    };

    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
});


