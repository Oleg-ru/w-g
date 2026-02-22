const progress = document.querySelector(".loaderProgress");
const percent = document.querySelector(".loaderProgress-percent");
const notification = document.querySelector(".notification");


let currentProgressPercent = 0;

function changeNotificationMessage(newMessage) {
    notification.innerText = newMessage;
}

function setFinishBorderProgress() {
    progress.style.borderBottomRightRadius = "10px"
    progress.style.borderTopRightRadius = "10px"
}

function getRandomPercent() {
    return Math.floor(Math.random() * (10 - 5 + 1)) + 5;
}

function getRandomSeconds() {
    return (Math.floor(Math.random() * (2 - 1 + 1)) + 1) * 1000;
}

function finishMessages() {
    setTimeout(() => {
        changeNotificationMessage("Загрузка файла успешно завершена");
        setInterval(() => {
            changeNotificationMessage("Файл обрабатывается...");
            setInterval(() => {
                changeNotificationMessage("Сохранение файла...");
                setInterval(() => {
                    changeNotificationMessage("Файл успешно сохранен и готов к использованию");
                }, getRandomSeconds())
            }, getRandomSeconds())
        }, getRandomSeconds())
    }, 0)
}

function startLoading() {
    changeNotificationMessage("Файл загружается")
    const percentIncrement = setInterval(() => {

        let newPercent = currentProgressPercent + getRandomPercent();

        if (newPercent > 100) {
            progress.style.width = `${100}%`
            percent.innerText = 100;
            setFinishBorderProgress();
            finishMessages()
            clearInterval(percentIncrement);
        }
        if (newPercent === 100) {
            setFinishBorderProgress();
            finishMessages()
            clearInterval(percentIncrement);
        }
        if (newPercent <= 100) {
            percent.innerText = newPercent;
            progress.style.width = `${newPercent}%`
            currentProgressPercent = newPercent;
        }
    }, 200)
}
startLoading();