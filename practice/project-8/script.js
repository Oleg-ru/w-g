const themeSwitch = document.getElementById("themeSwitch");
let userHasChoseTheme = false;
themeSwitch.addEventListener("change", toggleTheme);


function toggleTheme() {
    const currentTheme
        = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme)
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme)
} else {
    setTheme(getThemeByTime())
}

function getThemeByTime() {
    if (!savedTheme) {
        const currentTime = new Date;
        const currentHours = currentTime.getHours();
        return currentHours >= 7 && currentTime <= 22 ? 'light' : 'dark'
    }
}

console.log(window.matchMedia && window.matchMedia('prefers-color-scheme: dark').matches)