/*
theme switcher

!!! CSS
dyslexic font:
:root[dyslexic="true"] {
    * {
        font-family: OpenDyslexic !important;
    }
}

base theme:
:root {
    --var: color;
    & .theme-base{ display: block};
    & .theme-another{ display: none};
}

another theme:
:root[theme="another"] {
    --var: color;
    & .theme-base{ display: none};
    & .theme-another{ display: block};
}

!!! HTML
font switcher
<button id="fontSwitcher" onclick="changeFont()">
    OpenDyslexic: <span id="font-stat">false</span>
    <span style="position: absolute; right: -20px; color: rgba(255, 255, 255, 0.5)" title="Changes all fonts to Open Dyslexic font; also removes background images from buttons.">?</span>
</button>

theme switcher
<div id="theme-switcher">
    <span>theme:</span>
    <select id="themeSwitcher" onchange="changeTheme()">
        <option value="">base</option>
        <option value="another">another</option>
    </select>
</div>

and add this before </body> tag
<script src="location/theme-switcher.js"></script>
*/

const Themes = ["clover", "xp", "sky"];
const Frame = document.getElementById('middle-box');

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

