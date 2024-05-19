// stolen from https://codepen.io/troy-sucks/pen/RwOeOEJ

const themes = ["underwater", "green"];

document.body.className = localStorage.getItem("theme");

document.getElementById("toggle").onclick = () => {
  localStorage.setItem("theme", themes[(themes.indexOf(localStorage.getItem("theme")) + 1) % themes.length]);
  document.body.className = localStorage.getItem("theme");
};