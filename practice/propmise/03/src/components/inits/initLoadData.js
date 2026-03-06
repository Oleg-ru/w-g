import {loadData} from "../../app.js";

export function initLoadData(downloadButton) {
    downloadButton.addEventListener('click', loadData);
}