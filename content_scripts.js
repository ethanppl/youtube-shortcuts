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

// stopPropogation prevent keypress in input box to trigger the shortcuts
// Not all element/component in the YouTube page load on the initial load
// Recursive call to wait for element to render/mount to add stop propagation
function addStopPropagation(inputBoxesId, round) {
  const seconds = round > 8 ? 10000 : parseInt(1.33 ** round * 1000);

  // Set timeout to wait for elements to mount, especially the comment box
  setTimeout(() => {
    // Element that cannot be found
    let missedId = [];

    // Add keydown handler for each input box to prevent event further propagation
    inputBoxesId.forEach((id) => {
      const element = document.getElementById(id);
      if (element !== null) {
        element.onkeydown = (e) => {
          e.stopPropagation();
        };
      } else {
        missedId.push(id);
      }
    });

    if (missedId.length > 0) {
      addStopPropagation(missedId, round + 1);
    }
  }, seconds);
}

addStopPropagation(inputBoxesId, 0);
