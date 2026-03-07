import {BASE_URL} from "../host.js";
import {getUserInfo} from "../../utils/authHelper.js";

export async function deleteTask(taskId) {
    try {
        const {uid, token} = await getUserInfo();
        const response = await fetch(`${BASE_URL}/${uid}/${taskId}.json?auth=${token}`,{
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error('Не удалось удалить задачу. Статус ' + response.status);
        }
        return true;
    } catch (error) {
        console.error("Ошибка: " + error.message)
        throw error
    }
}