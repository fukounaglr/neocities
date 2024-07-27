// Themes: underwater, green, hell


document.body.className = localStorage.getItem("theme");


function changeTheme() {
    var selectedTheme = document.getElementById('themeSwitcher').value;
    document.documentElement.setAttribute('theme', selectedTheme);
    localStorage.setItem('selectedTheme', selectedTheme);
}
