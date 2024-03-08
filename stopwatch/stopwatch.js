const display = document.getElementById("display");
let startTime = null;
let intervalId = null; // Fix: initialize to null

const startTimer = () => {
  if (startTime === null) { // Only start if not already running
    startTime = Date.now();
    intervalId = setInterval(updateTime, 10);
    document.getElementById("start-btn").textContent = "Stop";
  } else {
    stopTimer();
  }
};

const stopTimer = () => {
  clearInterval(intervalId);
  document.getElementById("start-btn").textContent = "Start";
};

const resetTimer = () => {
  stopTimer();
  startTime = null;
  display.textContent = "00:00:00";
};

const updateTime = () => {
  const now = Date.now();
  if (startTime) { // Fix: Check if timer is running before calculating
    const elapsedTime = now - startTime;

    // Convert milliseconds to hours, minutes, seconds with leading zeros
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24).toString().padStart(2, "0");
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60).toString().padStart(2, "0");
    const seconds = Math.floor((elapsedTime / 1000) % 60).toString().padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}`;
  }
};

// Button event listeners
document.getElementById("start-btn").addEventListener("click", startTimer);
document.getElementById("stop-btn").addEventListener("click", stopTimer);
document.getElementById("reset-btn").addEventListener("click", resetTimer);

