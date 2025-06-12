
const year = document.querySelector("#year");

// use the date object
const today = new Date();


year.innerHTML = `<span>${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastmodified");

lastModified.innerHTML = `<span class="highlight">Last modification: ${document.lastModified}</span>`;


// Windchill - Set static values - in celsius
document.addEventListener("DOMContentLoaded", () => {
    const temp = 29; // °C
    const windSpeed = 11; // km/h
    let windChillText = "N/A";

    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
        windChillText = `${windChill.toFixed(1)} °C`;
    }

    const windChillElement = document.getElementById("wind-chill");
    if (windChillElement) {
        windChillElement.textContent = windChillText;
    }
});
  