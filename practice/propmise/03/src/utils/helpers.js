export function showError(message) {

    const icon = message === 'Задач нет' ? 'info' : 'error';
    const title = message === 'Задач нет' ? 'Задач еще нет' : 'Ошибка!';

    Swal.fire({
        title,
        text: message,
        icon,
        showConfirmButton: true
    })
}

export function showLoader() {
    overlay.style.display = 'flex'
}

export function hideLoader() {
    overlay.style.display = 'none'
}