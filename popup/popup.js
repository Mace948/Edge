document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("backgroundColor") === null) {
    localStorage.setItem("backgroundColor", "rgb(35, 35, 35)");
  }
  if (localStorage.getItem("borderColor") === null) {
    localStorage.setItem("borderColor", "rgb(60, 60, 60)");
  }
  if (localStorage.getItem("accentColor") === null) {
    localStorage.setItem("accentColor", "rgb(23, 150, 255)");
  }
  if (localStorage.getItem("textColor") === null) {
    localStorage.setItem("textColor", "rgb(235, 235, 235)");
  }
  if (localStorage.getItem("textColorDark") === null) {
    localStorage.setItem("textColorDark", "rgb(150, 150, 150)");
  }
  if (localStorage.getItem("borderColorLight") === null) {
    localStorage.setItem("borderColorLight", "rgb(100, 100, 100)");
  }
  if (localStorage.getItem("backgroundColorLight") === null) {
    localStorage.setItem("backgroundColorLight", "rgb(50, 50, 50)");
  }
  UpdateTheme();
});
