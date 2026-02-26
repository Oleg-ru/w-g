const formEl = document.querySelector(".form");
const submitBtnEl = document.querySelector('button[type="submit"]');
const nameEl = document.querySelector(".name");
const emailEl = document.querySelector(".email");
const passwordEl = document.querySelector(".password");
const repeatPasswordEl = document.querySelector(".repeat-password");
const selectEduEl = document.querySelector("#date-end-edu");
const passwordErrorEl = document.querySelector(".password-error");
const repeatPasswordErrorEl = document.querySelector(".repeat-password-error");
let dataToServer = null;

function addElementToSelect() {
    const nowYear = new Date().getFullYear();
    console.log(nowYear)

    for (let i = nowYear; i > nowYear - 40; i--) {
        const newOption = new Option(i, i);
        selectEduEl.add(newOption)
    }
}
function stepByInput() {
    const allInput = formEl.querySelectorAll("input, select");
    allInput.forEach((element, index) => {
        element.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                const nextIndex = (index + 1) % allInput.length;
                allInput[nextIndex].focus();
            }
        })
    })
}
function validatePassword() {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{3,}$/;
    passwordEl.addEventListener("input", (event) => {
        if (!passwordRegex.test(event.target.value)) {
            passwordErrorEl.style.display = "block";
            return true;
        }
        else {
            passwordErrorEl.style.display = "none";
        }
        return false;
    })
}
function validateRepeatPassword() {
    repeatPasswordEl.addEventListener("input", (event) => {
        if (event.target.value !== passwordEl.value) {
            repeatPasswordErrorEl.style.display = "block";
            return true;
        } else {
            repeatPasswordErrorEl.style.display = "none";
        }
        return false;
    })
}
function validate() {
    const validPassword = validatePassword();
    const validPasswordsRepeat = validateRepeatPassword();

    if (validPassword && validPasswordsRepeat) {
        submitBtnEl.disabled = false
    } else {
        submitBtnEl.disabled = false
    }
}
function submit(event) {
    event.preventDefault();
    dataToServer = {
        name: nameEl.value,
        email: emailEl.value,
        password: passwordEl.value,
        dateEdu: selectEduEl.value,
    }
    const formData = new FormData(formEl);
    const formDataResult = {};
    formData.forEach((value, key) => {
        formDataResult[key] = value;
    })
    console.log(JSON.stringify(formDataResult, null, 2))
}


function init() {
    formEl.addEventListener('submit', submit)
    addElementToSelect();
    stepByInput();
    validatePassword()
    validateRepeatPassword()
}

init()
