(function () {
  const peopleSpan = document.getElementById("peopleCount");
  let currentQueue = 237;

  function updateQueueDisplay() {
    peopleSpan.textContent = currentQueue;
  }

  function init() {
    updateQueueDisplay();
  }

  init();
})();
