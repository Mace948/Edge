// Import settings from localStorage and set their respective elements.

document.addEventListener("DOMContentLoaded", function () {
  // Background settings from localStorage.
  const savedBackgroundImage = localStorage.getItem("backgroundImage");
  const savedBackgroundRepeat = localStorage.getItem("backgroundRepeat");
  const savedBackgroundDarken = localStorage.getItem("backgroundDarken");
  const savedBackgroundBlur = localStorage.getItem("backgroundBlur");
  const savedBackgroundColor = localStorage.getItem("homepageBackgroundColor");
  const savedSearchBarEnabled = localStorage.getItem("searchBarEnabled");

  const DOMSearchBar = document.querySelector(".search-bar");
  localStorage.getItem("page") === "notepad" ? (DOMSearchBar.style.animation = "0.4s ease-out 0s 1 shrink") : (DOMSearchBar.style.animation = "0.6s ease-in-out 0s 1 SlideFromTop");
  localStorage.setItem("page", "homepage");

  // Set Element Variables
  const DOMFilterDiv = document.querySelector(".filter");
  if (savedBackgroundImage !== null) {
    DOMFilterDiv.style.background = `url('${savedBackgroundImage}')`;
  }

  if (savedBackgroundRepeat === "false") {
    DOMFilterDiv.style.backgroundRepeat = "no-repeat";
    DOMFilterDiv.style.backgroundSize = "cover";
  } else {
    DOMFilterDiv.style.backgroundRepeat = "repeat";
    DOMFilterDiv.style.backgroundSize = "auto";
  }

  if (savedBackgroundImage === null) {
    DOMFilterDiv.style.background = "" + savedBackgroundColor;
  }

  // Set Blur and Darken properties.
  var percentage = ((parseFloat(savedBackgroundDarken) - 100) / (0 - 100)) * 100;
  DOMFilterDiv.style.filter = `blur(${savedBackgroundBlur}px) brightness(${percentage}%)`;
  DOMFilterDiv.style.transform = "scale(120%)";

  // Enable / Disable search bar.
  const DOMSearchContainer = document.getElementById("search-form");
  if (savedSearchBarEnabled === "true") {
    DOMSearchContainer.style.display = "block";
  } else {
    DOMSearchContainer.style.display = "none";
  }

  // Update searh bar on user input.
  console.log(document.referrer);
  DOMSearchBar.addEventListener("input", function (event) {
    UpdateSearch(event, DOMSearchBar);
  });

  // Update Themes
  UpdateTheme();
});

// Increase or decrease the width of the search bar respectively.
function UpdateSearch(event, searchBar) {
  let subtract = 0;
  if (event["inputType"] == "deleteContentBackward") {
    subtract += 30;
  }
  searchBar.style.width = `${searchBar.scrollWidth - 30 - subtract}px`;
  subtract = 0;
}
