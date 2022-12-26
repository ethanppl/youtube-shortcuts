// Toggle the autoplay button
function toggleAutoplay() {
  const buttons = document.getElementsByClassName("ytp-autonav-toggle-button");
  for (const button of buttons) {
    button.click();
  }
}

// Scroll the page down by half
function scrollHalfDown() {
  window.scrollBy({
    top: window.innerHeight / 2,
    left: 0,
    behavior: "smooth",
  });
}

// Scroll the page up by half
function scrollHalfUp() {
  window.scrollBy({
    top: -window.innerHeight / 2,
    left: 0,
    behavior: "smooth",
  });
}

const urlRegex = /http[s]*:\/\/www\.youtube\.com\/watch/;

// Add the keydown listner to the page
document.addEventListener("keydown", (e) => {
  if (window.location.href.match(urlRegex) !== null) {
    if (e.code === "KeyA") {
      toggleAutoplay();
    } else if (e.code === "KeyD") {
      scrollHalfDown();
    } else if (e.code === "KeyU") {
      scrollHalfUp();
    }
  }
});

// ID of places with input boxes
const inputBoxesId = ["search-form", "below"];

// Set timeout to wait for elements to mount, especially the comment box
setTimeout(() => {
  // Add keydown handler for each input box to prevent event further propagation
  inputBoxesId.forEach((id) => {
    const element = document.getElementById(id);
    if (element !== null) {
      element.onkeydown = (e) => {
        e.stopPropagation();
      };
    }
  });
}, 3000);
