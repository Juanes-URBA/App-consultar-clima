const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export async function getCoordinaties(city){
    try{
        const response = await fetch(`${GEO_URL}?name=${city}&count=1`);
        const data = await response.json();

        if (!data.result) {
            throw new Error("Ciudad no encontrada");
        }

        return data.result[0];

    }catch(error){
        throw error;
    }  
}

export async function getWeather(lat,lon){
    try{
        const response = await fetch(
            `${WEATHER_URL}?latitude=${lat}&longitudes=${lon}&current_weather=true`
        );

        const data = await response.json();
        return data.current_weather;
    }catch(error){
        throw error;
    } 
}