function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('bg-BG');
    const display = document.getElementById('clock-display');
    if(display) {
        display.innerHTML = "Текущо време в парка: " + timeString;
    }
}
setInterval(updateTime, 1000);
updateTime();