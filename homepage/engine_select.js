// Update search engines.

document.addEventListener("DOMContentLoaded", function () {
  // Get current engine from localStorage else set it to google.
  savedEngine = localStorage.getItem("searchEngine");
  if (savedEngine === null) {
    localStorage.setItem("searchEngine", "google");
  }

  // Update search bar placeholder text to search engine.
  document.querySelector(".search-bar").placeholder = `search ${savedEngine}`;

  // Get should be active search engine element and set form queries.
  updatePlaceholder();

  // Get all search Engines.
  DOMEngines = document.querySelectorAll(".engine");

  // Update engine positions.
  let index = 1;
  DOMEngines.forEach((engine) => {
    if (engine.classList.contains("selectedEngine")) {
      index -= 1;
    } else {
      engine.style.left = `${51.5 + 3 * index}%`;
      engine.style.transitionDelay = `${index / 20}s`;
    }
    index += 1;
  });

  // Allow search engine toggle and refresh page after update.
  DOMSelectedEngine.addEventListener("click", function () {
    DOMEngines.forEach((engine) => {
      engine.classList.add("active");
      engine.addEventListener("click", function () {
        DOMSelectedEngine.classList.remove("selectedEngine");
        this.classList.add("selectedEngine");
        localStorage.setItem("searchEngine", this.id);
        DOMEngines.forEach((element) => {
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

function updatePlaceholder() {
  DOMSelectedEngine = document.getElementById(savedEngine);
  DOMSelectedEngine.classList.add("selectedEngine");
  if (DOMSelectedEngine.id === "duckduckgo") {
    console.log("duck");
    document.getElementById("search-form").action = "https://duckduckgo.com/?q=search&kp=-1&kl=us-en";
  } else if (DOMSelectedEngine.id === "google") {
    console.log("google");
    document.getElementById("search-form").action = "https://www.google.com/search";
  } else if (DOMSelectedEngine.id === "google scholar") {
    console.log("scholar");
    document.getElementById("search-form").action = "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=%s&btnG=";
  } else if (DOMSelectedEngine.id === "bing") {
    console.log("bing");
    document.getElementById("search-form").action = "https://www.bing.com/search?q=%s";
  } else if (DOMSelectedEngine.id === "youtube") {
    console.log("yt");
    document.getElementById("search-form").action = "https://www.youtube.com/results?search_query";
  }
}
