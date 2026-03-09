import {switchTheme} from "./src/components/switchTheme.js";
import {getWeatherByForm} from "./src/components/inputForm.js";
import {renderCurrentTime} from "./src/helpers/currentTime.js";
import {geolocation} from "./src/components/geolocation.js";

export function initApp() {
    switchTheme();
    getWeatherByForm();
    renderCurrentTime();
    geolocation();
}