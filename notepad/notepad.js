document.addEventListener("DOMContentLoaded", function () {
  UpdateTheme();
  localStorage.setItem("page", "notepad");

  const title = document.querySelector(".title");
  const body = document.querySelector(".body");
  const save = document.querySelector(".save");
  let deg = 0;
  let timeout;
  body.focus();
  loadDocument(title, body);
  save.addEventListener("click", function () {
    deg += 360;
    save.children[0].style.rotate = `${deg}deg`;
    saveDocument(title, body);
  });
  setColor(title, "Untitled");
  title.addEventListener("input", function () {
    setColor(title, "Untitled");
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      deg += 360;
      save.children[0].style.rotate = `${deg}deg`;
      saveDocument(title, body);
    }, 1000);
  });
  setColor(body, "Empty page");
  body.addEventListener("input", function (event) {
    if (event.data === "\\") {
      body.innerHTML = body.innerHTML.replace("\\", "");
      title.style.opacity = "0";
      body.style.opacity = "0";
      save.style.opacity = "0";
      setTimeout(() => {
        window.location = "../homepage/homepage.html";
      }, 600);
    }
    setColor(body, "Empty page");
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      deg += 360;
      save.children[0].style.rotate = `${deg}deg`;
      saveDocument(title, body);
    }, 1000);
  });
});

function setColor(obj, def) {
  if (obj.innerHTML !== def) {
    obj.style.color = "var(--text-color)";
  } else {
    obj.style.color = "var(--border-color)";
  }
}
