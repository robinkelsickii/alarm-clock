var display = document.getElementById('clock');
var alarmTime= null
var alarmTimeout= null


function currentTime() {
    let date= new Date();

    let hours= doubleDigits(date.getHours());
    let minutes= doubleDigits(date.getMinutes());
    let seconds= doubleDigits(date.getSeconds());

    display.innerText= `${hours}:${minutes}:${seconds}`;


}

function doubleDigits(time) {
    if (time <10) {
        return '0' + time;
    }
    return time;
}

function setAlarmTime {
    alarmTime = value;
}

setInterval(currentTime, 1000);