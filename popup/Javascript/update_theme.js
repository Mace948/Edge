function UpdateTheme() {
  const root = document.documentElement;
  root.style.setProperty("--background-color", localStorage.getItem("backgroundColor"));
  root.style.setProperty("--accent-color", localStorage.getItem("accentColor"));
  root.style.setProperty("--border-color", localStorage.getItem("borderColor"));
  root.style.setProperty("--text-color", localStorage.getItem("textColor"));
  root.style.setProperty("--text-color-dark", localStorage.getItem("textColorDark"));
  root.style.setProperty("--border-color-light", localStorage.getItem("borderColorLight"));
  root.style.setProperty("--background-color-light", localStorage.getItem("backgroundColorLight"));
}
