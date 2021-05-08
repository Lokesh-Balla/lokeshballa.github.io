dark_mode_toggle = () => {
  if (document.getElementById("dark-mode-switch").checked == true) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
};

document.body.onload = function () {
  dark_mode_toggle();
};
