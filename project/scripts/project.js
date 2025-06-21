const year = document.querySelector("#year");

// use the date object
const today = new Date();


year.innerHTML = `<span>${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastmodified");

lastModified.innerHTML = `<span class="highlight">Last modification: ${document.lastModified}</span>`;

// responsive views
const menuBtn = document.getElementById('hamburgerBtn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Listen for the form submission
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    // Prevent actual form submission (for testing)
    // event.preventDefault();

    // Get all checked dishes
    const selectedDishes = Array.from(document.querySelectorAll('input[name="dish_types[]"]:checked'))
        .map(cb => cb.value);

    // Log or use the selected dishes
    console.log('Selected Dishes:', selectedDishes);
    alert('You selected: ' + selectedDishes.join(', '));
});

//Recipes Array
let recipes = ["Protein", "Vegetables", "Soups", "Snacks", "Desserts"];

// Get the <select> element
const select = document.getElementById("recipes");

// Loop through the array and create <option> elements
recipes.forEach(recipe => {
    const option = document.createElement("option"); // Create option
    option.value = recipe.toLowerCase();           // Value in lowercase
    option.textContent = recipe;                   // Text shown to user
    select.appendChild(option);                      // Add option to <select>
});

// Check if localStorage is available
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

// Main Logic
const submitCountDisplay = document.querySelector('#submitCount');
const backButton = document.querySelector('#backBtn');

if (isLocalStorageAvailable()) {
    let submitCount = Number(localStorage.getItem('submitCount')) || 0;

    submitCount++; // Increment counter
    localStorage.setItem('submitCount', submitCount);

    submitCountDisplay.textContent = submitCount;

    // Click listener for going back
    backButton.addEventListener('click', () => {
        window.history.back();
    });
} else {
    submitCountDisplay.textContent = 'Local storage is not available';
}