document.addEventListener("DOMContentLoaded", function () {
  loadShortcuts();
  var all_shortcuts = document.querySelectorAll(".shortcut");
  let stringValue = localStorage.getItem("shortcutsHidden");
  let boolValue = stringValue === "true";
  if (boolValue) {
    all_shortcuts.forEach((shortcut) => {
      shortcut.classList.add("hide");
    });
  } else {
    all_shortcuts.forEach((shortcut) => {
      shortcut.classList.remove("hide");
    });
  }
  add = document.querySelector(".add");
  add.addEventListener("click", function () {
    createShortcut("https://google.com/");
    let shortcuts = localStorage.getItem("shortcuts");
    if (shortcuts === null) {
      localStorage.setItem("shortcuts", "https://google.com/");
    } else {
      shortcuts += " " + "https://google.com/";
      localStorage.setItem("shortcuts", shortcuts);
    }
  });
  add.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    all_shortcuts = document.querySelectorAll(".shortcut");
    all_shortcuts.forEach((shortcut) => {
      if (shortcut.classList.contains("hide")) {
        shortcut.classList.remove("hide");
        add.style.rotate = "360deg";
        localStorage.setItem("shortcutsHidden", false);
      } else {
        shortcut.classList.add("hide");
        add.style.rotate = "0deg";
        localStorage.setItem("shortcutsHidden", true);
      }
    });
  });
});

function loadShortcuts() {
  let shortcuts = localStorage.getItem("shortcuts");
  if (shortcuts === null) {
    return false;
  }
  let split_shortcuts = shortcuts.split(" ");
  split_shortcuts.forEach((shortcut) => {
    createShortcut(shortcut);
  });
}

function createShortcut(url) {
  let shortcutDiv = document.createElement("a");
  shortcutDiv.classList.add("shortcut");
  shortcutDiv.classList.add("simple-button");

  let img = document.createElement("img");
  img.classList.add("shortcut-preview");
  img.classList.add("logo");
  img.src = `${url}/favicon.ico`;

  shortcutDiv.appendChild(img);
  shortcutDiv.href = url;

  document.querySelector(".shortcut-container").appendChild(shortcutDiv);

  shortcutDiv.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    if (shortcutDiv.classList.contains("in-use")) return false;
    shortcutDiv.classList.add("in-use");

    input = document.querySelector(".search-bar");
    input.style.color = "var(--border-color-light)";
    input.value = shortcutDiv.href;

    button = document.createElement("button");
    button.classList.add("setURL");

    icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-check");

    document.querySelector(".search").type = "button";
    button.addEventListener("click", function () {
      let shortcuts = localStorage.getItem("shortcuts");
      let url = input.value;
      if (url === "") {
        shortcutDiv.classList.remove("in-use");
        button.remove();
        shortcuts = shortcuts.split(" ");
        var index = shortcuts.indexOf(shortcutDiv.href);
        if (index !== -1) {
          shortcuts.splice(index, 1);
        }
        shortcuts = shortcuts.join(" ");
        localStorage.setItem("shortcuts", shortcuts);

        shortcutDiv.remove();
        localStorage.removeItem("shortcuts");
      }
      shortcuts = shortcuts.split(" ");
      var index = shortcuts.indexOf(shortcutDiv.href);

      shortcutDiv.href = `${url}`;
      shortcutDiv.childNodes[0].src = `${url}favicon.ico`;
      shortcutDiv.classList.remove("in-use");
      if (index !== -1) {
        shortcuts[index] = shortcutDiv.href;
      }
      shortcuts = shortcuts.join(" ");
      localStorage.setItem("shortcuts", shortcuts);

      button.remove();
      document.querySelector(".search-bar").value = "";
      document.querySelector(".search").type = "action";
    });
    button.appendChild(icon);
    document.getElementById("search-form").appendChild(button);
  });
}
