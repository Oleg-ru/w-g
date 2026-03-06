import {loadData} from "../index.js";
import {hideLoader, showError, showLoader} from "../../utils/helpers.js";
import {addNewTask} from "../index.js";

export function initAddTask(addButton, taskInput) {
    addButton.addEventListener('click', async () => {
        try {
            showLoader()
            await addNewTask(taskInput);
            await loadData();
        } catch (error) {
            console.error(error.message);
            showError('Не удалось добавить новую задачу');
        } finally {
            hideLoader();
        }
    });
    taskInput.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            try {
                showLoader()
                await addNewTask(taskInput);
                await loadData();
            } catch (error) {
                console.error(error.message);
                showError('Не удалось добавить новую задачу');
            } finally {
                hideLoader();
            }
        }
    });
}

