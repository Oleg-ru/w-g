import {auth, onAuthStateChanged} from "../firebaseConfig.js";

/**
 * Получает информацию о текущем авторизованном пользователе
 * @returns {Promise<{uid: String, token: String}>} Объект с uid и токеном пользователя
 * @throws {Error} Если пользователь не авторизован
 */
export const getUserInfo = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const token = user.getIdToken();
                    resolve({uid: user.uid, token});
                } catch (error) {
                    reject(new Error('Не удалось получить токен'));
                }
            } else {
                reject(new Error('Пользователь не авторизован'));
            }
        })
    })
};