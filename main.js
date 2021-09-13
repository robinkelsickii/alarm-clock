var displayTime = document.getElementById('clock');


function currentTime() {
    let time = new Date;

    let hours = doubleDigits(time.getHours());
    let minutes = doubleDigits(time.getMinutes());
    let seconds = doubleDigits(time.getSeconds());

    displayTime.innerText = `${hours} : ${minutes} : ${seconds}`
}

function doubleDigits(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}

setInterval(currentTime, 1000);