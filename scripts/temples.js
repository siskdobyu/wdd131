document.addEventListener("DOMContentLoaded", () => {
const year = document.querySelector("#year");

// use the date object
const today = new Date();


year.innerHTML = `<span>${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastmodified");

lastModified.innerHTML = `<span class="highlight">Last modification: ${document.lastModified}</span>`;
});

const hamburgerBtn = document.getElementById("hamburgerBtn");
const nav = document.getElementById("primaryNav");

hamburgerBtn.addEventListener("click", () => {
    nav.classList.toggle("open");

    // Change symbol from ☰ to ✖ and back
    const isOpen = nav.classList.contains("open");
    hamburgerBtn.innerHTML = isOpen ? "&#10005;" : "&#9776;"; // ✖ or ☰
});    
