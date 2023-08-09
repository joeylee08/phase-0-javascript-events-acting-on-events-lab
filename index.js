const dodger = document.getElementById("dodger");

dodger.style.background = "pink";

function moveDodgerLeft() {
  const left = +dodger.style.left.replace("px", "");

  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
})

function moveDodgerRight() {
  const left = +dodger.style.left.replace("px", "");

  if (left < 360) {
    dodger.style.left = `${left + 10}px`;
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
})