import {auth, sendPasswordResetEmail} from "../../firebaseConfig.js";
import {showSignInForm} from "./signUp.js";

const forgotPasswordForm = document.getElementById('forgot-password-form');
const forgotPasswordMessage = document.getElementById('forgot-password-message');

forgotPasswordForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('forgot-password-email').value;
    try {
        await sendPasswordResetEmail(auth, email);
        forgotPasswordMessage.textContent = 'Письмо для сброса пароля отправлено на ваш email';
        forgotPasswordMessage.style.color = 'green';
    } catch (error) {
        console.error('Ошибка при отправке письма.', error.message);
        forgotPasswordMessage.textContent = 'Ошибка при отправке письма: ' + error.message;
        forgotPasswordMessage.style.color = 'tomato';
    } finally {
        setTimeout(() => {
            forgotPasswordForm.style.display = 'none';
            forgotPasswordMessage.style.display = 'none';
            showSignInForm()
        }, 3000)
    }
})