import React from 'react';
import styles from './RegForm.module.css'

function RegForm(props) {
    return (
        <div className={styles.backgroundImg}>
            <div className={styles.section}>
                <h1 className={styles.title}>Регистрация</h1>
                <form className={styles.form}>
                    <label className={styles.label}>
                        <div className={styles.labelText}>Имя</div>
                        <input type="text" className={styles.inputField}/>
                    </label>
                    <label className={styles.label}>
                        <div className={styles.labelText}>Почта</div>
                        <input type="email" className={styles.inputField}/>
                    </label>
                    <label className={styles.label}>
                        <div className={styles.labelText}>Пароль</div>
                        <input type="password" className={styles.inputField}/>
                    </label>
                    <div className={styles.errorMessage}>Пароль должен состоять из латинских букв и цифр, а также быть не
                        менее 8 символов
                    </div>
                    <label className={styles.label}>
                        <div className={styles.labelText}>Подтвердите пароль</div>
                        <input type="password" className={styles.inputField}/>
                    </label>
                    <div className={styles.errorMessage}>Пароли не совпадают</div>
                    <select className={styles.inputField}>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <button type="submit" className={styles.button}>Отправить</button>
                    <button type="reset" className={styles.button}>Очистить всё</button>
                    <div className={styles.errorMessage}>Проверьте заполнение полей формы</div>
                    <div className={styles.successMessage}>Данные успешно отправлены</div>
                </form>
            </div>
        </div>
    );
}

export default RegForm;