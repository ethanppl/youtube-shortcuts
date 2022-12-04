function toggleAutoplay() {
  const buttons = document.getElementsByClassName("ytp-autonav-toggle-button");
  for (const button of buttons) {
    button.click();
  }
}

function scrollHalfDown() {
  window.scrollBy({
    top: window.innerHeight / 2,
    left: 0,
    behavior: "smooth",
  });
}

function scrollHalfUp() {
  window.scrollBy({
    top: -window.innerHeight / 2,
    left: 0,
    behavior: "smooth",
  });
}

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyA") {
    toggleAutoplay();
  } else if (e.code === "KeyD") {
    scrollHalfDown();
  } else if (e.code === "KeyU") {
    scrollHalfUp();
  }
});
