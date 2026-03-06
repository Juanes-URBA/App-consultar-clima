import { getCoordinates, getWeather } from "./services.js";
import { showWeather, showError } from "./ui.js";

const form = document.getElementById("formulario");
const input = document.getElementById("inputCiudad");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const city = input.value.trim();

    try {
        const location = await getCoordinates(city);
        const weather = await getWeather(location.latitude, location.longitude);

        showWeather(location.name, weather);

    } catch (error) {
        showError(error.message);
    }
});