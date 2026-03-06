import {loadData} from "../index.js";

export function initLoadData(downloadButton) {
    downloadButton.addEventListener('click', loadData);
}