document.addEventListener("DOMContentLoaded", function () {
  const search = document.querySelector(".search-bar");
  const form = document.getElementById("search-form");
  form.addEventListener("submit", (e) => {
    var private = false;
    var address = false;
    e.preventDefault();
    let str = search.value;
    var shortcuts = localStorage.getItem("shortcuts");
    if (detectforURL(str)) address = true;
    if (str.indexOf(".") === 0) {
      str = str.replace(".", "");
      private = true;
    } else if (str.indexOf("/") === 0) {
      str = str.replace("/", "");
      if (str.indexOf("adblock") !== -1) {
        str.indexOf("false") === -1 ? localStorage.setItem("adblock", true) : localStorage.setItem("adblock", false);
        str.indexOf("false") === -1 ? (localStorage.setItem("adblock", true), enableAdblock(), (search.placeholder = "adblock enabled.")) : (localStorage.setItem("adblock", false), disableAdblock(), (search.placeholder = "adblock disabled."));
        search.value = "";
      } else {
        search.value = "";
        search.placeholder = "uknown command.";
      }
      return;
    } else if (str.indexOf("\\") === 0) {
      stopProcesses();
      document.querySelector(".add").style.opacity = "0";
      search.style.width = "100vw";
      search.style.height = "100vh";
      search.value = "";
      setTimeout(() => {
        search.classList.add("placeholder-changed");
      }, 400);

      setTimeout(() => {
        window.location = "../notepad/notepad.html";
      }, 600);
      return;
    }
    var url = containsURL(shortcuts, str);
    if (url !== false) {
      search.value = url;
      if (private) {
        chrome.windows.create({ url: search.value, incognito: true });
        saveSessionHistory(`.${search.value}`);
        search.value = "";
        search.placeholder = "inprivate.";
      } else {
        saveSessionHistory(search.value);
        window.open(search.value, "_self");
      }
    } else {
      if (private) {
        chrome.windows.create({ url: `https://duckduckgo.com/?q=${str}&kp=-1&kl=us-en`, incognito: true });
        saveSessionHistory(`.${search.value}`);
        search.value = "";
        search.placeholder = "inprivate.";
      } else if (address) {
        window.open(`https://${str}`);
        saveSessionHistory(search.value);
        search.value = "";
      } else {
        saveSessionHistory(search.value);
        form.submit();
      }
    }
  });
});

function detectforURL(str) {
  let new_str = str.split(".");
  if (new_str[new_str.length - 1].indexOf("com") !== -1 || new_str[new_str.length - 1].indexOf("gg") !== -1 || new_str[new_str.length - 1].indexOf("org") !== -1 || new_str[new_str.length - 1].indexOf("co") !== -1 || new_str[new_str.length - 1].indexOf("us") !== -1 || new_str[new_str.length - 1].indexOf("au") !== -1 || new_str[new_str.length - 1].indexOf("net") !== -1 || new_str[new_str.length - 1].indexOf("uk") !== -1) {
    return true;
  }
  return false;
}

function saveSessionHistory(search_term) {
  if (localStorage.getItem("history") === null) {
    localStorage.setItem("history", "");
  }
  let history = localStorage.getItem("history");
  history = history.split(";");
  if (search_term !== history[0]) history.unshift(search_term);
  if (history.length > 50) history.pop();
  history = history.join(";");
  localStorage.setItem("history", history);
}

function containsURL(shortcuts, str) {
  shortcuts = shortcuts.split(" ");
  var URL = false;
  shortcuts.forEach((shortcut) => {
    let char = shortcut.replace("https://", "");
    char = char.replace("http://", "");
    char = char.replace("www.", "");
    char = char[0];
    if (str === char) {
      URL = shortcut;
    }
  });
  return URL;
}
