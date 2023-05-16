const toggleModeBtn = document.getElementById("toggleModeBtn");
let isDarkMode = false;

toggleModeBtn.addEventListener("click", toggleMode);

function toggleMode() {
  if (isDarkMode) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
}

function enableDarkMode() {
  document.body.classList.add("dark-mode");
  isDarkMode = true;
}

function enableLightMode() {
  document.body.classList.remove("dark-mode");
  isDarkMode = false;
}
