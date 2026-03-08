import {auth, signInWithEmailAndPassword, sendEmailVerification} from "../../firebaseConfig.js";
import {loadData, signWIthGoogle} from "../index.js";
import {showConfirmation, showError, showSuccess, showWarning} from "../../utils/notification.js";

const signInForm = document.getElementById('signin-form');
const taskContainer = document.getElementById('task-container');

const googleButton = document.getElementById('google-signin-button');
googleButton.addEventListener('click', signWIthGoogle);

const forgotPasswordForm = document.getElementById('forgot-password-form');
const forgotPasswordButton = document.getElementById('forgot-password-button');
forgotPasswordButton.addEventListener('click', showForgotPasswordForm)

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

        switch (error.code) {
            case 'auth/too-many-requests': {
                showWarning('Слишком много попыток входа. Попробуйте позже.');
                break;
            }
            case 'auth/invalid-credential': {
                showWarning('Неверные учетные данные. Проверьте email или пароль');
                break;
            }
            default: {
                console.error('Ошибка авторизации: ', error.message, error.code);
                showError(`Произошла неизвестная ошибка авторизации.`);
            }
        }
    }
});

export function showTasksBlock() {
    taskContainer.style.display = 'block';
}

export function hideSignInForm() {
    signInForm.style.display = 'none';
}

function showForgotPasswordForm() {
    forgotPasswordForm.style.display = 'flex';
    hideSignInForm();
}