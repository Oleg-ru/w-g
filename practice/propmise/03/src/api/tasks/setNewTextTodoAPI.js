import {BASE_URL} from "../host.js";
import {getUserInfo} from "../../utils/authHelper.js";

export async function updateTaskText(taskId, newText) {
    try {
        const {uid, token} = await getUserInfo();
        const response = await fetch(`${BASE_URL}/${uid}/${taskId}.json?auth=${token}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({text: newText})
        });

        if (!response.ok) {
            throw new Error('Не удалось обновить текст задачи. Статус ' + response.status);
        }

        return true
    } catch (error) {
        throw error;
    }
}