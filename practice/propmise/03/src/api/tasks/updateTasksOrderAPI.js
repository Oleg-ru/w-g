import {BASE_URL} from "../host.js";
import {getUserInfo} from "../../utils/authHelper.js";

export async function updateTaskOrderOnServer(taskId, taskOrder) {
    try {
        const {uid, token} = await getUserInfo();
        const response = await fetch(`${BASE_URL}/${uid}/${taskId}.json`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({order: taskOrder})
        });

        if (!response.ok) {
            throw new Error('Не удалось обновить порядок задач. Статус ' + response.status);
        }

        return true;
    } catch (error) {
        console.error("Ошибка: " + error.message);
        throw error;
    }
}