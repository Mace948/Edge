document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.querySelector(".search-bar");
  var index = 0;
  inputField.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
      let history = localStorage.getItem("history");
      history = history.split(";");
      history.unshift("");
      history.pop();
      index++;
      if (index >= history.length) index--;
      inputField.value = history[index];
    } else if (event.key === "ArrowDown") {
      index--;
      if (index < 0) index++;
      let history = localStorage.getItem("history");
      history = history.split(";");
      history.unshift("");
      inputField.value = history[index];
    }
  });
});
