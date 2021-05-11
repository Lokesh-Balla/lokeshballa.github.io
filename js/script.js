const dark_mode_toggle = document.getElementById("dark-mode-switch");
const body = document.body;

if (localStorage.getItem("dark-mode") == "true") {
  dark_mode_toggle.checked = true;
}

dark_mode_toggle.onclick = () => {
  if (dark_mode_toggle.checked == true) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "true");
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "false");
  }
};
