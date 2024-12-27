window.onload = function () {
  var el = document.getElementById("wrapper");
  var toggleButton = document.getElementById("menu-toggle");

  if (el && toggleButton) {
    toggleButton.onclick = function () {
      el.classList.toggle("toggled");
    };
  }
};