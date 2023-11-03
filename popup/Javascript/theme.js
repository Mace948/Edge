function loadAndUpdateColor(id, key) {
  let picker = document.getElementById(id);
  const rgba2hex = (rgba) =>
    `#${rgba
      .match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/)
      .slice(1)
      .map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, "0").replace("NaN", ""))
      .join("")}`;
  if (localStorage.getItem(key).indexOf("#") === -1) {
    picker.value = rgba2hex(localStorage.getItem(key));
  } else {
    picker.value = localStorage.getItem(key);
  }
  console.log(key, localStorage.getItem(key), picker.value);
  picker.addEventListener("change", function () {
    localStorage.setItem(key, picker.value);
    updateTheme();
    refresh();
  });
}
