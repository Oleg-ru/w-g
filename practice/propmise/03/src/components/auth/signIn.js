import {auth, signInWithEmailAndPassword} from "../../firebaseConfig.js";
import {loadData} from "../index.js";

const signInForm = document.getElementById('signin-form');
const taskContainer = document.getElementById('task-container');

signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("Пользователь успешно авторизован: " + user.uid);

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