document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("backgroundColor") === null) {
    localStorage.setItem("backgroundColor", "rgb(35, 35, 35)");
  }
  if (localStorage.getItem("borderColor") === null) {
    localStorage.setItem("borderColor", "rgb(60, 60, 60)");
  }
  UpdateTheme();
});
