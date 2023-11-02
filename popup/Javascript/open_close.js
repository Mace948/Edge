document.addEventListener("DOMContentLoaded", function () {
  buttons = document.querySelectorAll(".openable");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      toggleButtons(this);
    });
  });
});

function toggleButtons(button) {
  buttons = button.parentNode.querySelectorAll(".object");
  if (isActive(button) === true) {
    button.classList.remove("active");
    hideSubButtons(button, buttons);
    if (isPrimaryButton(button)) {
      showOtherButtons(button);
    } else {
      showParentButtons(button, buttons);
      showSiblingButtons(button, buttons);
    }
    let lastSibling = getLastSibling(button, buttons);
    lastSibling.classList.remove("last-active");
  } else if (isActive(button) === false) {
    button.classList.add("active");
    showSubButtons(button, buttons);
    hideOtherButtons(button);
    let lastSibling = getLastSibling(button, buttons);
    lastSibling.classList.add("last-active");
  }
}

function showParentButtons(button, buttons) {
  buttons.forEach((element) => {
    if (isParentButton(button, element) === true) {
      element.classList.remove("hidden");
    }
  });
}

function showSiblingButtons(button, buttons) {
  buttons.forEach((element) => {
    if (isSiblingButton(button, element) === true) {
      element.classList.remove("hidden");
    }
  });
}

function isPrimaryButton(button) {
  if (button.classList.contains("sub") || button.classList.contains("sub-sub")) {
    return false;
  } else {
    return true;
  }
}

function isActive(button) {
  if (button.classList.contains("active")) {
    return true;
  } else {
    return false;
  }
}

function getLastSibling(button, buttons) {
  let lastSibling;
  buttons.forEach((element) => {
    if (element.classList.contains("active") && element !== button) {
      console.log(element);
      lastSibling = element;
    }
  });
  return lastSibling;
}

function isSubButton(button1, button2) {
  if (button1 === button2) {
    return "active";
  } else if (button1.classList.contains("sub") === false && button2.classList.contains("sub") === true) {
    return true;
  } else if (button1.classList.contains("sub") === false && button2.classList.contains("sub-sub") === true) {
    return "far";
  } else if (button1.classList.contains("sub") === true && button2.classList.contains("sub-sub")) {
    return true;
  } else {
    return false;
  }
}

function isSiblingButton(button1, button2) {
  if (button1 === button2) {
    return "active";
  } else if (button1.classList.contains("sub") && button2.classList.contains("sub")) {
    return true;
  } else if (button1.classList.contains("sub-sub") && button2.classList.contains("sub-sub")) {
    return true;
  } else {
    return false;
  }
}

function isParentButton(button1, button2) {
  if (button1 === button2) {
    return "active";
  } else if (button1.classList.contains("sub") && button2.classList.contains("sub") === false && button2.classList.contains("sub-sub") === false) {
    return true;
  } else if (button1.classList.contains("sub-sub") && button2.classList.contains("sub")) {
    return true;
  } else {
    return false;
  }
}

function hideOtherButtons(button) {
  buttons = document.querySelectorAll(".object");
  buttons.forEach((element) => {
    if (isSubButton(button, element) === false && element.classList.contains("active") === false) {
      element.classList.add("hidden");
    }
  });
}

function showOtherButtons(button) {
  buttons = document.querySelectorAll(".object");
  buttons.forEach((element) => {
    if (isSubButton(button, element) === false && isSubButton(button, element) !== "far") {
      element.classList.remove("hidden");
    }
  });
}

function showSubButtons(button, buttons) {
  let index = 0;
  buttons.forEach((element) => {
    if (isSubButton(button, element) === true) {
      index += 1;
      element.classList.remove("hidden");
      element.style.transform = `translateY(${index * 84}px)`;
    }
  });
}

function hideSubButtons(button, buttons) {
  buttons.forEach((element) => {
    if (isSubButton(button, element) && isSubButton(button, element) !== "active") {
      element.classList.add("hidden");
    }
  });
}
