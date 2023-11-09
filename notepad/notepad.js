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
  title.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
      body.focus();
    }
    setColor(title, "Untitled");
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      deg += 360;
      save.children[0].style.rotate = `${deg}deg`;
      saveDocument(title, body);
    }, 500);
  });
  setColor(body, "Empty page");
  body.addEventListener("keydown", function (event) {
    if (event.key === "\\") {
      body.innerHTML = body.innerHTML.replace("\\", "");
      title.style.opacity = "0";
      body.style.opacity = "0";
      save.style.opacity = "0";
      deg += 360;
      save.children[0].style.rotate = `${deg}deg`;
      saveDocument(title, body);
      setTimeout(() => {
        window.location = "../homepage/homepage.html";
      }, 600);
    } else if (event.key === "ArrowUp") {
      const caretLine = getCaretLinePosition(body);
      if (caretLine === 0) {
        title.focus();
      }
    }
    setColor(body, "Empty page");
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      deg += 360;
      save.children[0].style.rotate = `${deg}deg`;
      saveDocument(title, body);
    }, 500);
  });

  body.addEventListener("mouseup", (e) => {
    const selection = document.getSelection();
    const selectedText = selection.toString();

    if (selectedText !== "") {
      showContextMenu(e.clientX, e.clientY);
    }
  });
  body.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const selection = document.getSelection();
    const selectedText = selection.toString();

    if (selectedText !== "") {
      showContextMenu(e.clientX, e.clientY);
    }
  });
  document.addEventListener("mousedown", function (event) {
    const contextMenu = document.querySelector(".context-menu");
    let targetEl = event.target; // clicked element
    do {
      if (targetEl == contextMenu) {
        return;
      }
      // Go up the DOM
      targetEl = targetEl.parentNode;
    } while (targetEl);
    // This is a click outside.
    hideContextMenu();
  });
});
function showContextMenu(x, y) {
  const contextMenu = document.querySelector(".context-menu");
  contextMenu.style.left = x + "px";
  contextMenu.style.top = y + "px";
}

function hideContextMenu() {
  const contextMenu = document.querySelector(".context-menu");
  contextMenu.style.left = "100vw";
  contextMenu.style.top = "100vh";
}
function setColor(obj, def) {
  if (obj.innerHTML !== def) {
    obj.style.color = "var(--text-color)";
  } else {
    obj.style.color = "var(--border-color)";
  }
}
function getCaretLinePosition(editableDiv) {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const caretRect = range.getBoundingClientRect();
    const divRect = editableDiv.getBoundingClientRect();
    return Math.floor((caretRect.top - divRect.top) / parseFloat(getComputedStyle(editableDiv).lineHeight));
  }
  return -1; // Caret not found or not in the div
}
