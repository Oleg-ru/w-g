import {
    auth,
    signInWithPopup,
    GoogleAuthProvider
} from "../../firebaseConfig.js";
import {showError} from "../../utils/notification.js";


export async function signWIthGoogle() {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        console.log(result)
        if (result._tokenResponse.isNewUser) {
            console.log('Регистрация через Google успешна!')
        } else {
            console.log('Вход через Google успешный')
        }

    } catch (error) {
        console.error('Ошибка входа через Google', error.message);
    }
}