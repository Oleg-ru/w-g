import {initDeleteCompleted, initAddTask, showTasksBlock, hideSignInForm, hideSignupForm} from "./components/index.js";
import {container} from "./app.js";
import {auth, onAuthStateChanged} from "../src/firebaseConfig.js";
import {loadData} from "../src/components/index.js";
import {showWarning} from "./utils/notification.js";

const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");

export function initApp() {

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            if (!user.emailVerified) {
                showWarning('Ваш email не подтвержден. Пожалуйста, проверьте вашу почту.');
                return;
            }
            await loadData();
            hideSignInForm();
            hideSignupForm();
            showTasksBlock();
        } else {
            document.getElementById('signup-form').style.display = 'flex';
        }
    })

    initDeleteCompleted(container);
    initAddTask(addButton, taskInput);
}