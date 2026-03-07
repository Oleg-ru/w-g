import {auth, signOut} from "../../firebaseConfig.js";
import {hideSignupForm, showSignInForm} from "./signUp.js";

document.getElementById('logout-button').addEventListener('click',  async () => {
    try {
        await signOut(auth);
        hideSignupForm();
        showSignInForm();
        document.getElementById('task-container').style.display = 'none';
        console.log('Пользователь вышел из системы');
    } catch (error) {
        console.error('Ошибка при выходе из приложения', error.message);
    }
})