import {switchTheme} from "./src/components/switchTheme.js";
import {getWeatherByForm} from "./src/components/inputForm.js";

export function initApp() {
    switchTheme();
    getWeatherByForm();
}