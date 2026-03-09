const scrollToTopEl = document.getElementById('toTop');
scrollToTopEl.addEventListener("click", scrollToTop);

export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopEl.style.display = 'block'
    } else {
        scrollToTopEl.style.display = 'none'

    }
})