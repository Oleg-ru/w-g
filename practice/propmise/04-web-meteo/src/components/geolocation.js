import {apiKey, BASE_URL} from "../api/apiKeyAndHost.js";
import {showError} from "./error.js";
import {getForecast, getWeather} from "../api/getWeatherAndForecast.js";
import {renderCurrentWeather} from "./currentWeather.js";
import {renderHourlyForecast} from "./hourlyForecast.js";
import {renderDailyForecast} from "./dailyForecast.js";

export function geolocation() {
    document.addEventListener('DOMContentLoaded', async () => {
        try {
            const {longitude, latitude} = await getBrowserGeolocation();
            const locationName = await geoLocationName(latitude, longitude);
            await fetchWeatherByCoords(latitude, longitude, locationName);
        } catch (error) {
            console.error('Ошибка при получении местоположения', error.message);
            showError('Не удалось определить местоположение. Укажите город вручную')
        }
    })
}

function getBrowserGeolocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Геолокация не поддерживается вашим браузером'))
        } else {
            navigator.geolocation.getCurrentPosition(position => {
                const {longitude, latitude} = position.coords;
                resolve({longitude, latitude});
            }, error => {reject(error)})
        }
    })
}

async function geoLocationName(latitude, longitude) {
    const reverseGeocodingUrl = new URL(`${BASE_URL}/geo/1.0/reverse`);
    const queryParams = new URLSearchParams({
        lat: latitude,
        lon: longitude,
        limit: 1,
        appid: apiKey,
    });
    const url = `${reverseGeocodingUrl}?${queryParams.toString()}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.length > 0) {
            const {locale_names} = data[0];
            const russianName = locale_names?.ru || data[0].name;
            return `${russianName}`;
        } else {
            throw new Error('Название местоположения не найдено')
        }
    } catch (error) {
        console.error('Ошибка при получении названия местоположения', error.message);
        showError('Ошибка при получении местоположения')
    }
}

async function fetchWeatherByCoords(latitude, longitude, locationName) {
    try {
        const weatherData = await getWeather(latitude, longitude);
        const forecastData = await getForecast(latitude, longitude);

        renderCurrentWeather(weatherData, locationName);
        renderHourlyForecast(forecastData);
        renderDailyForecast(forecastData);

    } catch (e) {
        console.error(e.message);
        showError('Не удалось получить данные о погоде.')
    }
}