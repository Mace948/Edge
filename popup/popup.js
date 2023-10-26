document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("backgroundColor") === null) {
    localStorage.setItem("backgroundColor", "rgb(35, 35, 35)");
  }
  if (localStorage.getItem("borderColor") === null) {
    localStorage.setItem("borderColor", "rgb(60, 60, 60)");
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

  var offset = 0;
  const objects = document.querySelectorAll(".container > .object");
  const container = document.querySelector(".container");
  objects.forEach(function (object, index, arr) {
    object.addEventListener("click", function () {
      if (object.classList.contains("active")) {
        console.log(offset);
        object.style.transform = "translateY(0px)";
        object.classList.remove("active");
        container.style.padding = "12px";
        var menu = getMenu(object);
        menu.style.transform = "translateY(1000px)";
        objects.forEach((secondary_object) => {
          if (secondary_object !== object) {
            secondary_object.style.transform = "translateX(0px)";
          }
        });
        return false;
      }

      object.classList.add("active");
      container.style.padding = "0";
      offset = -82 * index;
      object.style.transform = "translateY(" + offset + "px)";
      objects.forEach((secondary_object) => {
        if (secondary_object !== object) {
          secondary_object.style.transform = "translateX(500px)";
        }
      });
      if (getMenu(object) !== null) {
        var menu = getMenu(object);
        menu.style.transform = "translateY(-1000px)";
      }
    });
  });
});
