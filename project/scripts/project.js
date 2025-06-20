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
