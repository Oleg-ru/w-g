import {capitalizeCity} from "./capitalize.js";

export function saveCityToLocalStorage(city) {
    const capitalizedCity = capitalizeCity(city);
    const cities = JSON.parse(localStorage.getItem('recentCities')) || [];
    if (!cities.includes(capitalizedCity)) {
        cities.unshift(capitalizedCity);
        if (cities.length > 5) {
            cities.pop();
        }
        localStorage.setItem('recentCities', JSON.stringify(cities));
    }

}

