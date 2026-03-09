
export function switchTheme() {
    const themeSwitch = document.getElementById('themeSwitch');
    let userHasChoseTheme = false;

    themeSwitch.addEventListener('change', toggleTheme)

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        userHasChoseTheme = true;
        setTheme(newTheme);
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (userHasChoseTheme) {
            localStorage.setItem('theme', theme);
        }
    }

    const saveTheme = localStorage.getItem('theme');
    if (saveTheme) {
        setTheme(saveTheme)
    } else {
        const themeByBrowser = getThemeByBrowserSettings();
        if (themeByBrowser === 'dark') {
            setTheme('dark');
        } else {
            const themeByTime = getThemeByTime();
            setTheme(themeByTime);
        }
    }
    
    function getThemeByTime() {
        const now = new Date();
        const hours = now.getHours();
        return hours >= 7 && hours < 22 ? 'light' : 'dark';
    }
}

function getThemeByBrowserSettings() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
}