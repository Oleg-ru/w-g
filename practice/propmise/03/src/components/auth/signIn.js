import {auth, signInWithEmailAndPassword, sendEmailVerification} from "../../firebaseConfig.js";
import {loadData, signWIthGoogle} from "../index.js";
import {showConfirmation, showSuccess, showWarning} from "../../utils/notification.js";

const signInForm = document.getElementById('signin-form');
const taskContainer = document.getElementById('task-container');

const googleButton = document.getElementById('google-signin-button');
googleButton.addEventListener('click', signWIthGoogle)

signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        if (!user.emailVerified) {
            showWarning('Ваш email не подтвержден. Пожалуйста, проверьте вашу почту.');
            const resend = await showConfirmation('Отправить письмо с подтверждением повторно?');
             if (resend) {
                 await sendEmailVerification(user);
                 showSuccess('Письмо с подтверждение успешно отправлено')
             }
             return;
        }

        hideSignInForm();
        showTasksBlock();
        await loadData()
    } catch (error) {
        console.error('Ошибка авторизации: ', error.message, error.code);
        alert(`Ошибка авторизации: ${error.message}`);
    }
});

export function showTasksBlock() {
    taskContainer.style.display = 'block';
}

export function hideSignInForm() {
    signInForm.style.display = 'none';
}