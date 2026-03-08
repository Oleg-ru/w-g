import {loadData} from "../index.js";
import {updateTaskText} from "../../api/index.js";
import {showError} from "../../utils/notification.js";

export async function setNewTextTask(taskId, taskText) {

    const {value: newText} = await Swal.fire({
        title: 'Редактирование задачи',
        input: 'text',
        inputLabel: 'ВВедите текст новой задачи',
        inputValue: taskText,
        showCancelButton: true,
        confirmButtonText: 'Сохранить',
        cancelButtonText: 'Отменить',
        inputValidator: (value) => {
            if (!value) {
                return 'Поле не может быть пустым'
            }
        }
    });

    if (newText) {
        try {
            await updateTaskText(taskId, newText);
            await loadData();
        } catch (error) {
            console.error(error.message);
            showError('Не удалось изменить текст задачи');
        }
    }
}