function startUploadTimer() {
  // Target Date: August 7, 2023 at 4:00 PM EDT
  // EDT is UTC-4
  const uploadDate = new Date("2023-08-07T16:00:00-04:00").getTime();

  function updateDisplay() {
    const now = new Date().getTime();
    const elapsed = now - uploadDate;

    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    // Update the HTML element
    const timerElement = document.getElementById("upload-timer");
    if (timerElement) {
      timerElement.innerText = 
        days + "d " + 
        hours.toString().padStart(2, '0') + "h " + 
        minutes.toString().padStart(2, '0') + "m " + 
        seconds.toString().padStart(2, '0') + "s";
    }
  }

  // Run every second
  updateDisplay();
  setInterval(updateDisplay, 1000);
}

// Initialize when the script loads
startUploadTimer();
