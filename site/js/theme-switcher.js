// Themes: underwater, green, hell


document.body.className = localStorage.getItem("theme");


  function changeTheme() {
        var theme = document.getElementById('themeSwitcher').value;
        document.documentElement.setAttribute('theme', theme);
        localStorage.setItem('theme', theme);
    }
