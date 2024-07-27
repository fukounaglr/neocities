// const Themes = ["underwater", "green"];

document.documentElement.setAttribute('theme', localStorage.getItem("selectedTheme"));

    function changeTheme() {
        var selectedTheme = document.getElementById('themeSwitcher').value;
        document.documentElement.setAttribute('theme', selectedTheme);
        localStorage.setItem('selectedTheme', selectedTheme);
    }

