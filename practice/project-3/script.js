const registeredUsers = [
    {username: "user1", password: "Password1"},
    {username: "user2", password: "Password2"},
    {username: "user3", password: "Password3"},
];

//register form

const usernameError = document.getElementById("username-error-sign_up");
const passwordError = document.getElementById("password-error-sign_up");
const successMessage = document.getElementById("success-message-sign_up");
const welcomeMessage = document.getElementById("welcome-message-sign_up");
const registerFiled = document.getElementById("register-filed-sign_up");

function validateUsername(username) {
    // Изменить шаблон на: только буквы и цифры, и быть длиной от 3 до 20 символов - done
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/
    return usernameRegex.test(username);
}

function validatePassword(password) {
    // Изменить шаблон на: не менее 8 символов, включая обязательно буквы в разных регистрах, и еще обязательно цифры и специальные символы
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
}

document.getElementById("register-button-sign_up").addEventListener("click", () => {

    const username = document.getElementById("username-sign_up").value;
    const password = document.getElementById("password-sign_up").value;
    const passwordConfirm = document.getElementById("confirm-password-sign_up").value;

    if (!validateUsername(username)) {
        registerFiled.innerText = 'Логин должен быть длиной от 3 до 20'
        registerFiled.classList.remove('hidden');
        registerFiled.classList.add('error');
        throw new Error('Username incorrect');
    } else if (!validatePassword(password)) {
        registerFiled.innerText = 'Пароль не пустым, и содержать буквы в разных регистрах, цифры и спец символы'
        registerFiled.classList.remove('hidden');
        registerFiled.classList.add('error');
        throw new Error('Password incorrect');
    }

    //проверка на наличие такого пользователя
    registeredUsers.some((user) => {
        if (user.username === username) {
            registerFiled.innerText = 'Пользователь с данным именем уже существует'
            registerFiled.classList.remove('hidden');
            registerFiled.classList.add('error');
            throw new Error("User name is exist");
        }
    })

    if (password !== passwordConfirm) {
        registerFiled.innerText = 'Пароли не совпадают, проверьте правильность повторного ввода пароля'
        registerFiled.classList.remove('hidden');
        registerFiled.classList.add('error');
        throw new Error("Passwords is not equals");
    }

    registerFiled.classList.add('hidden')
    successMessage.classList.remove('hidden')

});

//login form
document.getElementById("login-button").addEventListener("click", () => {
    const unsuccessMessage = document.getElementById("unsuccess-message");
    const welcomeMessage = document.getElementById("welcome-message");
    const welcomeUsername = document.getElementById("welcome-username");

    const usernameEl = document.getElementById('username').value;
    const passwordEl = document.getElementById('password').value;

    registeredUsers.some((user) => {
        if (user.username === usernameEl && user.password === passwordEl) {
            welcomeMessage.classList.remove('hidden')
            welcomeUsername.innerText = usernameEl;
            return true;
        } else {
            unsuccessMessage.classList.remove('hidden')
            unsuccessMessage.classList.add('error')
        }
    })
})