let temp = null;

const tempEl = document.getElementById("temperature");
const loaderEl = document.getElementById("loader");

tempEl.textContent = temp && `Температура: ${temp} градусов` || `Данные загружаются`;

if (temp) {
    loaderEl.style.display = 'none'
} else {
    loaderEl.style.display = 'block'
    loaderEl.style.width = "100px"
}