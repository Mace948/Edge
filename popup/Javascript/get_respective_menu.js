function getMenu(object) {
  if (object.id === "custom-tab") {
    var menu = document.getElementById("custom-tab-menu");
  }
  if (object.id === "adblock") {
    var menu = document.getElementById("adblock-menu");
  }
  if (object.id === "custom-tab-menu") {
    var menu = document.getElementById("custom-tab-menu-menu");
  }
  return menu;
}
