import {setNewTextTask} from "../index.js";
import {loadData} from "../../app.js";
import {showError} from "../../utils/helpers.js";

export function initChangeTextTask(setNewTextButtonEl, task) {
    setNewTextButtonEl.addEventListener('click', async () => {
        try {
            await setNewTextTask(task.id, task.text)
            await loadData();
        } catch (error) {
            console.error(error.message);
            showError('Не удалось изменить текст задачи');
        }
    });
}