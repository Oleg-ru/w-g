import {switchTheme} from "./src/components/switchTheme.js";
import {getWeatherByForm} from "./src/components/inputForm.js";
import {renderCurrentTime} from "./src/helpers/currentTime.js";
import {geolocation} from "./src/components/geolocation.js";
import {scrollToTop} from "./src/components/scrollToTop.js";
import {getCurrentYear} from "./src/components/currentYear.js";

export function initApp() {
    switchTheme();
    getWeatherByForm();
    renderCurrentTime();
    geolocation();
    scrollToTop();
    getCurrentYear()
}