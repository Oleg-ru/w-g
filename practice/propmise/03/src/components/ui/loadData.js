import {hideLoader, showError, showLoader} from "../../utils/helpers.js";
import {renderData} from "./renderData.js";
import {getTodos} from "../../api/index.js";
import {container, deleteCompletedButton} from '../../app.js'
import {getUserInfo} from "../../utils/authHelper.js";

export async function loadData() {
    try {
        showLoader();
        const {uid, token} = await getUserInfo();
        const todos = await getTodos(uid, token);
        renderData(todos, container, deleteCompletedButton);
    } catch (error) {
        console.error("Ошибка: " + error.message);

        if (error.message === 'Задач нет') {
            showError('Задач нет');
        } else {
            showError('Не удалось получить данные');
        }
    } finally {
        hideLoader();
    }
}