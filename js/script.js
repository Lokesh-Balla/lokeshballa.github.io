read_local_storage = () => {
  if (localStorage.getItem("dark-mode") == "true") {
    document.getElementById("dark-mode-switch").checked = true;
  }
};

dark_mode_toggle = () => {
  if (document.getElementById("dark-mode-switch").checked == true) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "true");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "false");
  }
};

document.body.onload = function () {
  read_local_storage();
  dark_mode_toggle();
};
