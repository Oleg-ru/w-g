import {hideLoader, showLoader} from "../../utils/helpers.js";
import {renderData} from "./renderData.js";
import {getTodos} from "../../api/index.js";
import {container, deleteCompletedButton} from '../../app.js'
import {getUserInfo} from "../../utils/authHelper.js";
import {showError, showInfo} from "../../utils/notification.js";

export async function loadData() {
    try {
        showLoader();
        const {uid, token} = await getUserInfo();
        const todos = await getTodos(uid, token);
        if (todos?.length === 0) {
            showInfo('Задач нет');
        }
        renderData(todos, container, deleteCompletedButton);
    } catch (error) {
        if (error.message === 'Задач нет') {
            showInfo('Задач нет');
            return true;
        }
        console.error("Ошибка: " + error.message);
        showError('Не удалось получить данные');
    } finally {
        hideLoader();
    }
}