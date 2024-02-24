function flashEnable() {
  const flashing = document.querySelectorAll('.flashing');
  for (let i = 0; i < flashing.length; i++) {
    let url = flashing[i].src.substring(0, flashing[i].src.length - 6);
    flashing[i].src = url + 'an.gif';
  }
}
function flashDisable() {
  const flashing = document.querySelectorAll('.flashing');
  for (let i = 0; i < flashing.length; i++) {
    let url = flashing[i].src.substring(0, flashing[i].src.length - 6);
    flashing[i].src = url + 'st.gif';
  }
}
{
  let selection = localStorage.getItem('flashing');
  let checkbox = document.querySelector('#gif-toggle');
  if (selection == 'true') {
    checkbox.checked = true;
    flashEnable();
  } else if (selection == 'false') {
    checkbox.checked = false;
    flashDisable();
  }
  checkbox.addEventListener('change', () => {
    if (checkbox.checked == true) {
      flashEnable();
      localStorage.setItem('flashing', 'true');
    } else if (checkbox.checked == false) {
      flashDisable();
      localStorage.setItem('flashing', 'false');
    }
  })
}