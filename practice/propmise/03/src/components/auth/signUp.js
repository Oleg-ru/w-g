import {auth, createUserWithEmailAndPassword} from "../../firebaseConfig.js";

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
        console.log("Пользователь успешно зареган: " + user.uid);

        alert('Регистрация прошла успешно');
        hideSignupForm();
        showSignInForm();
    } catch (error) {
        console.error('Ошибка регистрации: ', error.message, error.code);
        alert(`Ошибка регистрации: ${error.message}`);
    }
});

function hideSignupForm() {
    signupForm.style.display = 'none';
}

function showSignInForm() {
    signInForm.style.display = 'block';
}