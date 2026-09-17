// Display current date

function displayDate() {

    const today = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").textContent =
        today.toLocaleDateString("en-IN", options);
}

displayDate();


// Search Weather

function searchWeather() {

    const cityInput =
        document.getElementById("cityInput");

    const city =
        cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    /*
        This is demo data.

        Later, an API can be connected here
        to get real-time weather information.
    */

    document.getElementById("city").textContent = city;

    document.getElementById("temperature").textContent =
        Math.floor(Math.random() * 10) + 25;

    document.getElementById("humidity").textContent =
        Math.floor(Math.random() * 30) + 50 + "%";

    document.getElementById("wind").textContent =
        Math.floor(Math.random() * 15) + 5 + " km/h";

    document.getElementById("rain").textContent =
        Math.floor(Math.random() * 70) + "%";

    document.getElementById("pressure").textContent =
        Math.floor(Math.random() * 20) + 1000 + " hPa";

    document.getElementById("condition").textContent =
        "Partly Cloudy";

    document.getElementById("weatherIcon").textContent =
        "⛅";
}


// Allow Enter key for searching

document
    .getElementById("cityInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            searchWeather();
        }

    });