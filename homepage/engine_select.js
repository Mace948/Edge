document.addEventListener("DOMContentLoaded", function () {
  savedEngine = localStorage.getItem("searchEngine");
  if (savedEngine === null) {
    localStorage.setItem("searchEngine", "google");
  }
  savedEngine = localStorage.getItem("searchEngine");
  document.querySelector(".search-bar").placeholder = `search ${savedEngine}`;
  selected = document.getElementById(savedEngine);
  if (savedEngine === "duckduckgo") {
    document.getElementById("search-form").action = "https://duckduckgo.com/?q=search&kp=-1&kl=us-en";
  } else if (savedEngine === "google") {
    document.getElementById("search-form").action = "https://www.google.com/search";
  } else if (savedEngine === "google scholar") {
    document.getElementById("search-form").action = "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=%s&btnG=";
  } else if (savedEngine === "bing") {
    document.getElementById("search-form").action = "https://www.bing.com/search?q=%s";
  }
  selected.classList.add("selected");
  engines = document.querySelectorAll(".engine");

  let index = 1;
  engines.forEach((engine) => {
    if (engine === selected) {
      index -= 1;
    } else {
      engine.style.left = `${51.5 + 3 * index}%`;
      engine.style.transitionDelay = `${index / 20}s`;
    }
    index += 1;
  });

  selected.addEventListener("click", function () {
    engines.forEach((engine) => {
      engine.classList.add("active");
      engine.addEventListener("click", function () {
        selected.classList.remove("selected");
        this.classList.add("selected");
        localStorage.setItem("searchEngine", this.id);
        engines.forEach((element) => {
          element.classList.remove("active");
        });
        document.activeElement.blur();

        setTimeout(function () {
          refresh();
        }, 1000);
      });
    });
  });
});
