var displayTime = document.getElementById('clock');


function currentTime() {
    let time = new Date;

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    displayTime.innerText = `${hours} : ${minutes} : ${seconds}`
}
setInterval(currentTime, 1000);