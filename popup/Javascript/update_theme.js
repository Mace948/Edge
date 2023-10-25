function UpdateTheme() {
  const root = document.documentElement;
  root.style.setProperty(
    "--background-color",
    localStorage.getItem("backgroundColor")
  );
  root.style.setProperty("--border-color", localStorage.getItem("borderColor"));
}
