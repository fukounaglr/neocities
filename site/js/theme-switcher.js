 const Themes = ["underwater", "green", "neon", "hell", "default"];

document.documentElement.setAttribute('theme', localStorage.getItem("selectedTheme"));
document.getElementById('themeSwitcher').value = localStorage.getItem("selectedTheme");

    function changeTheme() {
        var selectedTheme = document.getElementById('themeSwitcher').value;
        document.documentElement.setAttribute('theme', selectedTheme);
        localStorage.setItem('selectedTheme', selectedTheme);
    }

