document.addEventListener("DOMContentLoaded", function () {
  const backgroundImage = document.querySelector(".preview");
  backgroundImage.setAttribute("src", localStorage.getItem("backgroundImage"));

  const backgroundRepeatCheckbox = document.getElementById("background-repeat");
  let stringValue = localStorage.getItem("backgroundRepeat");
  let boolValue = stringValue === "true";
  backgroundRepeatCheckbox.checked = boolValue;

  const adblockCheckbox = document.getElementById("adblock");
  stringValue = localStorage.getItem("adblock");
  boolValue = stringValue === "true";
  adblockCheckbox.checked = boolValue;

  const darkSlider = document.getElementById("darkSlider");
  darkSlider.value = localStorage.getItem("backgroundDarken");

  const blurSlider = document.getElementById("blurSlider");
  blurSlider.value = localStorage.getItem("backgroundBlur");

  const backgroundColorPicker = document.getElementById("backgroundColorPicker");
  backgroundColorPicker.value = localStorage.getItem("homepageBackgroundColor");

  const searchBarCheckbox = document.getElementById("search-bar");
  stringValue = localStorage.getItem("searchBarEnabled");
  boolValue = stringValue === "true";
  searchBarCheckbox.checked = boolValue;
});
