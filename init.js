import {switchTheme} from "./src/components/switchTheme.js";
import {getWeatherByForm} from "./src/components/inputForm.js";
import {renderCurrentTime} from "./src/helpers/currentTime.js";

export function initApp() {
    switchTheme();
    getWeatherByForm();
    renderCurrentTime();
}