const resultDiv = document.getElementById("result");

export function showWeather(cityName, weather){
    resultDiv.innerHTML =`
    <div class="card">
        <h2>${cityName}</h2>
        <p><strong>Temperatura:</strong> ${weather.temperature} °C</p>
        <p><strong>Viento:</strong> ${weather.windspeed} km/h</p>
        <p><strong>Código clima:</strong> ${weather.weathercode}</p>
        <p><strong>Hora:</strong> ${weather.time}</p>
    </div>`; 
}

export function showError(message){
    resultDiv.innerHTML =`
    <div class="card">
        <p style="color:red;"><strong>Error:</strong> ${message}</p>
    </div>`
}