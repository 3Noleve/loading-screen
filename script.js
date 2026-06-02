(function () {
  const spinner = document.getElementById("spinner");
  const peopleSpan = document.getElementById("peopleCount");
  const dirBtns = document.querySelectorAll(".dir-btn");
  let currentQueue = 237;
  let currentDirection = "cw";

  function updateQueueDisplay() {
    peopleSpan.textContent = currentQueue;
  }

  function applyDirection() {
    if (currentDirection === "cw") {
      spinner.classList.remove("reverse");
    } else {
      spinner.classList.add("reverse");
    }
  }

  function setDirection(direction) {
    currentDirection = direction;
    applyDirection();
    dirBtns.forEach((btn) => {
      const btnDir = btn.getAttribute("data-dir");
      if (btnDir === direction) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  function init() {
    updateQueueDisplay();
    setDirection("cw");
    dirBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const dir = btn.getAttribute("data-dir");
        setDirection(dir);
      });
    });
  }

  init();
})();
