export function capitalizeCity(city) {
    if (!city) return city;
    return city
        .toLowerCase()
        .split(/[\s-]/)
        .map(word =>
            word.charAt(0)
                .toLowerCase() + word.slice(1))
        .join("-");
}