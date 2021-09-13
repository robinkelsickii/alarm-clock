var displayTime = document.getElementById('clock');
var alarmTime = null
var alarmTimeOut = null


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

function setAlarmTime(value) {
    alarmTime = value
}

function setAlarm() {
    if (alarmTime) {
        let current = new Date();
        let timeTilAlarm = new Date(alarmTime);

        if (timeTilAlarm > current) {
            let timeout = timeTilAlarm.getTime() - current.getTime();
            alarmTimeOut = setTimeout(()=> alert("Hey Devil, It's time to wake up. Hoorah!"), timeout);
            alert("Alright, I'll wake you up.");
        }
    }
}

setInterval(currentTime, 1000);