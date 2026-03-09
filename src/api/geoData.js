import {apiKey, BASE_URL} from './apiKeyAndHost.js'
import {showError} from "../components/error.js";
import {isCyrillic} from "../helpers/checkCyrillic.js";

export const getGeoData = async (cityInput) => {
    const city = cityInput.value.trim();
    
    if (!city || !isCyrillic(city)) {
        showError('Проверьте название города');
        return;
    }
    
    try {
        const geoUrl = `${BASE_URL}/geo/1.0/direct`;
        const queryParams = new URLSearchParams({
            q: city,
            limit: 1,
            appid: apiKey,
        });
        const geoResponse = await fetch(`${geoUrl}?${queryParams.toString()}`);
        const geoData = await geoResponse.json();
        
        if (!geoData?.length) {
            throw new Error('Город не найден');
        }

        const {lat, lon} = geoData[0];
        console.log(lat, lon);
    } catch (error) {
        console.error(error.message);
        showError('Данные не получены');
    }
};