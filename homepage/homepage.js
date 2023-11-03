document.addEventListener("DOMContentLoaded", function () {
  const savedBackground = localStorage.getItem("backgroundImage");
  const backgroundRepeat = localStorage.getItem("backgroundRepeat");
  const backgroundDarken = localStorage.getItem("backgroundDarken");
  const backgroundBlur = localStorage.getItem("backgroundBlur");
  const backgroundColor = localStorage.getItem("homepageBackgroundColor");
  const searchBarEnabled = localStorage.getItem("searchBarEnabled");

  const filterDiv = document.querySelector(".filter");

  if (savedBackground !== null) {
    filterDiv.style.background = `url('${savedBackground}')`;
  }
  if (backgroundRepeat === "false") {
    filterDiv.style.backgroundRepeat = "no-repeat";
    filterDiv.style.backgroundSize = "cover";
  } else {
    filterDiv.style.backgroundRepeat = "repeat";
    filterDiv.style.backgroundSize = "auto";
  }
  if (savedBackground === null) {
    filterDiv.style.background = "" + backgroundColor;
  }

  var percentage = ((parseFloat(backgroundDarken) - 100) / (0 - 100)) * 100;
  filterDiv.style.filter = `blur(${backgroundBlur}px) brightness(${percentage}%)`;
  filterDiv.style.transform = "scale(120%)";

  const searchBar = document.querySelector(".search-container");
  if (searchBarEnabled === "true") {
    searchBar.style.display = "block";
  } else {
    searchBar.style.display = "none";
  }

  const input = document.querySelector(".search-bar");

  let subtract = 0;
  input.addEventListener("input", function (event) {
    if (event["inputType"] == "deleteContentBackward") {
      subtract += 30;
    }
    input.style.width = `${input.scrollWidth - 30 - subtract}px`;
    subtract = 0;
  });

  UpdateTheme();
});
