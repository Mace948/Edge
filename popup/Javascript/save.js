document.addEventListener("DOMContentLoaded", function () {
  const backgroundImage = document.getElementById("background-picker");
  backgroundImage.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      localStorage.setItem("backgroundImage", reader.result);
      console.log(reader.result);
    });
    reader.readAsDataURL(this.files[0]);
    refresh();
  });

  const darkSlider = document.getElementById("darkSlider");
  darkSlider.addEventListener("change", function () {
    localStorage.setItem("backgroundDarken", darkSlider.value);
    refresh();
  });

  const blurSlider = document.getElementById("blurSlider");
  blurSlider.addEventListener("change", function () {
    localStorage.setItem("backgroundBlur", blurSlider.value);
    refresh();
  });

  const backgroundColorPicker = document.getElementById("backgroundColorPicker");
  backgroundColorPicker.addEventListener("change", function () {
    localStorage.setItem("homepageBackgroundColor", backgroundColorPicker.value);
    localStorage.removeItem("backgroundImage");
    refresh();
  });

  const backgroundRepeatCheckbox = document.getElementById("background-repeat");
  backgroundRepeatCheckbox.addEventListener("change", function () {
    localStorage.setItem("backgroundRepeat", backgroundRepeatCheckbox.checked);
    refresh();
  });

  const searchBarCheckbox = document.getElementById("search-bar");
  searchBarCheckbox.addEventListener("change", function () {
    localStorage.setItem("searchBarEnabled", searchBarCheckbox.checked);
    refresh();
  });
});
