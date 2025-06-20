
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

// Number of visits count
// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// // 2️⃣ Get the stored VALUE for the numVisits
// let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// // 3️⃣ Determine if this is the first visit or display the number of visits.
// if (numVisits !== 0) {
//     visitsDisplay.textContent = numVisits;
// } else {
//     visitsDisplay.textContent = `This is your first visit! Welcome!`;
// }

// // 4️⃣ increment the number of visits by one.
// numVisits++;

// // 5️⃣ store the new visit total into localStorage, key=numVisits-ls
// localStorage.setItem("numVisits-ls", numVisits);

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

let numVisits = 0;

if (isLocalStorageAvailable()) {
    numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;

    if (numVisits !== 0) {
        visitsDisplay.textContent = numVisits;
    } else {
        visitsDisplay.textContent = "This is your first visit! Welcome!";
    }

    numVisits++;
    localStorage.setItem("numVisits-ls", numVisits);
} else {
    visitsDisplay.textContent = "Local storage is not available.";
  }



