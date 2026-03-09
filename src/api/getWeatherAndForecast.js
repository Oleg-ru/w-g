import {apiKey, BASE_URL} from "./apiKeyAndHost.js";


const fetchData = async (endpoint, lat, lon) => {
    const url = new URL(`${BASE_URL}/data/2.5/${endpoint}`);
    const queryParams = new URLSearchParams({
        lat,
        lon,
        appid: apiKey,
        lang: 'ru',
        units: 'metric',
    });
    url.search = queryParams.toString();
    const response = await fetch(url);

    if (!response) {
        throw Error('Не удалось загрузить данные о погоде')
    }

    return await response.json()
};

export async function getWeather(lat, lon) {
    return fetchData('weather', lat, lon);
}

export async function getForecast(lat, lon) {
    return fetchData('forecast', lat, lon);
}