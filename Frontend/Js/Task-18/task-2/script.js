const endDate = new Date("2025-08-25T09:00:00");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const endMessage = document.getElementById("endMessage");

function updateCountdown() {
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    daysEl.textContent =
      hoursEl.textContent =
      minutesEl.textContent =
      secondsEl.textContent =
        "0";
    endMessage.textContent = "انتهى العد التنازلي ";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();
