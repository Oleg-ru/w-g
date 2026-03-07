import {auth, createUserWithEmailAndPassword, sendEmailVerification} from "../../firebaseConfig.js";
import {showError, showSuccess} from "../../utils/notification.js";

const signupForm = document.getElementById('signup-form');
const signInForm = document.getElementById('signin-form');
const signInButton = document.getElementById('signIn');

signInButton.addEventListener('click', (event) => {
    event.preventDefault();
    hideSignupForm();
    showSignInForm();
})

signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await sendEmailVerification(user);
        console.log("Пользователь успешно зареган: " + user.uid);

        showSuccess('Для входа в приложение подтвердите ваш email. Письмо с подтверждением отправлено.');
        hideSignupForm();
        showSignInForm();
    } catch (error) {
        console.error('Ошибка регистрации: ', error.message, error.code);
        showError(`Ошибка регистрации.`);
    }
});

export function hideSignupForm() {
    signupForm.style.display = 'none';
}

export function showSignInForm() {
    signInForm.style.display = 'flex';
}