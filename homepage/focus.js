// On page load, create a new page with the search bar set as the focused element

if (location.search !== "?search") {
  location.search = "?search";
  throw new Error();
}

function onLoad() {
  document.getElementById("search").focus();
}

window.onload = onLoad;
