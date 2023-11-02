document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider");
  sliders.forEach((slider) => {
    var x = slider.value;
    var colour = `linear-gradient(to right,  var(--accent-color) ${x}%, var(--background-color) ${x}%)`;
    slider.style.background = colour;

    slider.addEventListener("mousemove", function () {
      var x = slider.value;
      var colour = `linear-gradient(to right,  var(--accent-color) ${x}%, var(--background-color) ${x}%)`;
      slider.style.background = colour;
    });
  });
});
