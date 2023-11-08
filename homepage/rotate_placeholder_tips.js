let stopAnimation = false;
let deleteInterval;
let addInterval;
function stopProcesses() {
  stopAnimation = true;
  clearInterval(deleteInterval);
  clearInterval(addInterval);
}
document.addEventListener("DOMContentLoaded", function () {
  function animatePlaceholder(inputField, newPlaceholder, callback) {
    const currentPlaceholder = inputField.placeholder;
    const delay = 40; // Delay in milliseconds between each letter deletion/addition

    function deleteAndAdd(index) {
      if (index >= 0) {
        inputField.placeholder = currentPlaceholder.slice(0, index);
        setTimeout(() => {
          deleteAndAdd(index - 1);
        }, delay);
      } else {
        inputField.placeholder = "";
        setTimeout(() => {
          addPlaceholder(0);
        }, delay);
      }
    }

    function addPlaceholder(index) {
      if (index < newPlaceholder.length) {
        inputField.placeholder = newPlaceholder.slice(0, index + 1);
        setTimeout(() => {
          addPlaceholder(index + 1);
        }, delay);
      } else {
        setTimeout(callback, 2000);
      }
    }

    // Start the deletion process
    deleteAndAdd(currentPlaceholder.length - 1);
  }

  // Usage example
  const inputField = document.querySelector(".search-bar");
  const placeholders = ["search", "the . operator allows for private search.", "try .secrets.", "the / allows for commands.", "try /adblock.", "search with the first letter of any bookmark."];

  let currentIndex = 0;

  function runAnimation() {
    if (currentIndex >= placeholders.length) {
      currentIndex = 0; // Reset index for repeated animations
    }
    var newPlaceholder = placeholders[currentIndex];
    newPlaceholder === "search" ? (newPlaceholder = `search ${localStorage.getItem("searchEngine")}.`) : (newPlaceholder = newPlaceholder);
    animatePlaceholder(inputField, newPlaceholder, () => {
      // Increment the index and run the animation again
      currentIndex++;
      if (!stopAnimation) {
        runAnimation();
      }
    });
  }

  // Start the animation
  runAnimation();
});
