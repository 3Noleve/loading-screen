(function () {
  const spinner = document.getElementById("spinner");
  const peopleSpan = document.getElementById("peopleCount");
  const stopBtn = document.getElementById("stopBtn");
  const colorPicker = document.getElementById("colorPicker");
  const dirBtns = document.querySelectorAll(".dir-btn");
  let currentQueue = 237;
  let isPaused = false;
  let resumeTimeout = null;
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

  function setSpinnerColor(hex) {
    spinner.style.borderLeftColor = hex;
    spinner.style.borderTopColor = hex;
  }

  function clearResumeTimeout() {
    if (resumeTimeout) {
      clearTimeout(resumeTimeout);
      resumeTimeout = null;
    }
  }

  function resumeSpinner() {
    if (isPaused) {
      spinner.classList.remove("paused");
      isPaused = false;
    }
  }

  function onStopClick() {
    clearResumeTimeout();

    if (!isPaused) {
      spinner.classList.add("paused");
      isPaused = true;
    }

    if (currentQueue > 0) {
      currentQueue--;
      updateQueueDisplay();
    }

    resumeTimeout = setTimeout(() => {
      resumeSpinner();
      resumeTimeout = null;
    }, 2000);
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
    setSpinnerColor(colorPicker.value);
    setDirection("cw");
    isPaused = false;
    spinner.classList.remove("paused");
    clearResumeTimeout();

    stopBtn.addEventListener("click", onStopClick);
    colorPicker.addEventListener("input", (e) =>
      setSpinnerColor(e.target.value),
    );
    dirBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const dir = btn.getAttribute("data-dir");
        setDirection(dir);
      });
    });
  }

  init();
})();
