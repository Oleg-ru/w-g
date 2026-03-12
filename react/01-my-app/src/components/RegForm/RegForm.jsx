import React, {useState} from 'react';
import styles from './RegForm.module.css'
import {checkPasswordMatch, checkRequired, validatePassword} from "./Validators.js";

function RegForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [selectYear, setSelectYear] = useState('');
    const [requiredFieldsError, setRequiredFieldsError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    function handleNameChange(event) {
        const newName = event.target.value;
        setName(newName);
    }

    function handleEmailChange(event) {
        const newEmail = event.target.value;
        setEmail(newEmail);
    }

    function handlePasswordChange(event) {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setIsPasswordValid(validatePassword(newPassword));
        setPasswordMatch(checkPasswordMatch(newPassword, confirmPassword));
    }

    function handleConfirmPasswordChange(event) {
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword);
        setPasswordMatch(checkPasswordMatch(password, newConfirmPassword));
    }

    function handleYearChange(event) {
        const newYear = event.target.value;
        setSelectYear(newYear);
    }

    function handleResetForm() {
        setPassword('');
        setConfirmPassword('');
        setSelectYear('');
    }

    function handleSubmit(event) {
        event.preventDefault();
        const allFieldsField = checkRequired([name, email, password, confirmPassword, selectYear]);
        const isFormValid = allFieldsField && isPasswordValid && passwordMatch;
        if (!isFormValid) {
            setRequiredFieldsError(true);
            setShowSuccessMessage(false);
            return;
        } else {
            setRequiredFieldsError(false);
            setShowSuccessMessage(true);
            const formData = {name, email, password, confirmPassword, selectYear};
            alert(JSON.stringify(formData, null, 2));
            event.target.reset(); //чистим почту и имя
            handleResetForm(); //чистим управляемые элементы
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000)
        }
    }

    const years = Array.from(
        {length: 40},
        (_, i) => new Date().getFullYear() - i
    );

    return (
        <div className={styles.backgroundImg}>
            <div className={styles.section}>
                <h1 className={styles.title}>Регистрация</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label}>
                        <div className={styles.labelText}>Имя</div>
                        <input type="text" className={styles.inputField} onChange={handleNameChange}/>
                    </label>
                    <label className={styles.label}>
                        <div className={styles.labelText}>Почта</div>
                        <input type="email" className={styles.inputField} onChange={handleEmailChange}/>
                    </label>
                    <label className={styles.label}>
                        <div className={styles.labelText}>Пароль</div>
                        <input type="password" className={styles.inputField} value={password}
                               onChange={handlePasswordChange}/>
                    </label>
                    {!isPasswordValid &&
                        <div className={styles.errorMessage}>Пароль должен состоять из латинских букв и цифр, а также
                            быть
                            не
                            менее 8 символов
                        </div>}

                    <label className={styles.label}>
                        <div className={styles.labelText}>Подтвердите пароль</div>
                        <input type="password" className={styles.inputField} value={confirmPassword}
                               onChange={handleConfirmPasswordChange}/>
                    </label>
                    {!passwordMatch && <div className={styles.errorMessage}>Пароли не совпадают</div>}

                    <select className={styles.inputField} value={selectYear} onChange={handleYearChange}>
                        <option value="" disabled selected>Дата окончания учебного заведения:</option>
                        {years.map(year => <option key={year + 'a'} value={year.toString()}>{year}</option>)}
                    </select>
                    <button type="submit" className={styles.button}>Отправить</button>
                    <button type="reset" className={styles.button} onClick={handleResetForm}>Очистить всё</button>
                    {requiredFieldsError && <div className={styles.errorMessage}>Проверьте заполнение полей формы</div>}
                    {showSuccessMessage && <div className={styles.successMessage}>Данные успешно отправлены</div>}
                </form>
            </div>
        </div>
    );
}

export default RegForm;