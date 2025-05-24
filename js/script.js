
const countdownElement = document.getElementById("countdown");
const nextUpdate = new Date();
nextUpdate.setDate(nextUpdate.getDate() + (14 - (new Date().getDate() % 14)));
nextUpdate.setHours(0, 0, 0, 0);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = nextUpdate - now;

    if (distance < 0) {
        countdownElement.innerHTML = "¡Actualización disponible!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
