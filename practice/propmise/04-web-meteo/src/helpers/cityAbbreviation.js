export function replaceAbbreviation(city) {
    const lowerCaseCity = city.toLowerCase();
    if (cityAbbreviation[lowerCaseCity]) {
        return cityAbbreviation[lowerCaseCity];
    }
    return city;
}

const cityAbbreviation = {
    мск: 'Москва',
    спб: 'Санкт-Петербург'
};