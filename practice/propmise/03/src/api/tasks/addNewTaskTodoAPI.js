import {BASE_URL} from "../host.js";
import {getUserInfo} from "../../utils/authHelper.js";

export async function addTask(newTask) {
    try {
        const {uid, token} = await getUserInfo();
        const response = await fetch(`${BASE_URL}/${uid}.json?auth=${token}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask)
        });

        if (!response.ok) {
            throw new Error('Не удалось создать задачу. Статус ' + response.status);
        }
        return true;
    } catch (error) {
        throw error;
    }
}