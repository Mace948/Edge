function getMenu(object) {
  if (object.id === "custom-tab") {
    var menu = document.getElementById("custom-tab-menu");
  }
  if (object.id === "adblock") {
    var menu = document.getElementById("adblock-menu");
  }
  return menu;
}
