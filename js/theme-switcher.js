 const Themes = ["underwater", "green", "neon", "hell", "cats", "depths"];

 document.documentElement.setAttribute('theme', localStorage.getItem("selectedTheme"));
 document.documentElement.setAttribute('dyslexic', localStorage.getItem("openDyslexic"));

 if (Themes.includes(localStorage.getItem("selectedTheme"))) {
     document.getElementById('themeSwitcher').value = localStorage.getItem("selectedTheme");
 }


 function changeTheme() {
     var selectedTheme = document.getElementById('themeSwitcher').value;
     document.documentElement.setAttribute('theme', selectedTheme);
     localStorage.setItem('selectedTheme', selectedTheme);
 }

 var fontStat = document.getElementById("font-stat");
 var fontSwitcher = document.getElementById("fontSwitcher");



 if (localStorage.getItem("openDyslexic") == "true") {
     fontSwitcher.className = "active";
     fontStat.innerHTML = "true";
 }

 function changeFont() {
     if (localStorage.getItem("openDyslexic") == "true") {
         dyslexFont = "false";
         fontSwitcher.className = "";
     } else {
         dyslexFont = "true";
         fontSwitcher.className = "active";
     }
     fontStat.innerHTML = dyslexFont;
     document.documentElement.setAttribute('dyslexic', dyslexFont);
     localStorage.setItem('openDyslexic', dyslexFont);
 }
