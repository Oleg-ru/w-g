import {showError} from "../../utils/helpers.js";
import {deleteCompletedTodos} from "../../api/index.js";
import {deleteCompletedButton, loadData} from "../../app.js";

export function initDeleteCompleted(container) {
    deleteCompletedButton.addEventListener('click', async () => {
        const {isConfirmed} = await Swal.fire({
            title: "Вы уверены?",
            text: "Удалим все выполненные задача",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Да, удалить их",
            cancelButtonText: "Отменить"
        });

        if (!isConfirmed) return;

        try {
            await deleteCompletedTodos(container);
            await loadData();
        } catch (error) {
            console.error(error.message);
            showError('Не удалось удалить выполненные задачи');
        }
    })
}
