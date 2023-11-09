let fontSize;
let timeout;
let deg = 0;

document.addEventListener("DOMContentLoaded", function () {
  let save = document.querySelector(".save");
  let body = document.querySelector(".body");
  let title = document.querySelector(".title");

  const paragraphFontSizeButton = document.getElementById("paragraphFontSize");
  paragraphFontSizeButton.addEventListener("click", () => {
    if (window.getSelection().anchorNode.parentNode.nodeName === "SPAN") {
      window.getSelection().anchorNode.parentNode.style.fontSize = "15.2px";
    } else {
      const span = document.createElement("span");
      span.style.fontSize = "15.2px";
      window.getSelection().getRangeAt(0).surroundContents(span);
    }
    window.getSelection().removeAllRanges();
    animateAndSave();
  });
  const oneFontSizeButton = document.getElementById("oneFontSize");
  oneFontSizeButton.addEventListener("click", () => {
    if (window.getSelection().anchorNode.parentNode.nodeName === "SPAN") {
      window.getSelection().anchorNode.parentNode.style.fontSize = "42px";
    } else {
      const span = document.createElement("span");
      span.style.fontSize = "42px";
      window.getSelection().getRangeAt(0).surroundContents(span);
    }
    window.getSelection().removeAllRanges();
    animateAndSave();
  });

  const twoFontSizeButton = document.getElementById("twoFontSize");
  twoFontSizeButton.addEventListener("click", () => {
    if (window.getSelection().anchorNode.parentNode.nodeName === "SPAN") {
      window.getSelection().anchorNode.parentNode.style.fontSize = "32px";
    } else {
      const span = document.createElement("span");
      span.style.fontSize = "32px";
      window.getSelection().getRangeAt(0).surroundContents(span);
    }
    window.getSelection().removeAllRanges();
    animateAndSave();
  });
  const threeFontSizeButton = document.getElementById("threeFontSize");
  threeFontSizeButton.addEventListener("click", () => {
    if (window.getSelection().anchorNode.parentNode.nodeName === "SPAN") {
      window.getSelection().anchorNode.parentNode.style.fontSize = "23px";
    } else {
      const span = document.createElement("span");
      span.style.fontSize = "23px";
      window.getSelection().getRangeAt(0).surroundContents(span);
    }
    window.getSelection().removeAllRanges();
    animateAndSave();
  });

  const boldButton = document.getElementById("bold");
  boldButton.addEventListener("click", () => {
    document.execCommand("bold", false, null);
    animateAndSave();
  });

  const italicButton = document.getElementById("italic");
  italicButton.addEventListener("click", () => {
    document.execCommand("italic", false, null);
    animateAndSave();
  });

  const underlineButton = document.getElementById("underline");
  underlineButton.addEventListener("click", () => {
    document.execCommand("underline", false, null);
    animateAndSave();
  });

  const strikeThroughButton = document.getElementById("strikeThrough");
  strikeThrough.addEventListener("click", () => {
    document.execCommand("strikeThrough", false, null);
    animateAndSave();
  });

  const subscriptButton = document.getElementById("subscript");
  subscriptButton.addEventListener("click", () => {
    document.execCommand("subscript", false, null);
    animateAndSave();
  });

  const superscriptButton = document.getElementById("superscript");
  superscriptButton.addEventListener("click", () => {
    document.execCommand("superscript", false, null);
    animateAndSave();
  });

  function animateAndSave() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      deg += 360;
      save.children[0].style.rotate = `${deg}deg`;
      saveDocument(title, body);
    }, 500);
  }
});
