const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let [seconds, minutes, hours] = [0, 0, 0];
let displaytime = document.querySelector(".time");
let timer = null;

startBtn.addEventListener("click", function () {
    watchStart();
});
stopBtn.addEventListener("click", function () {
    watchStop();
});
resetBtn.addEventListener("click", function () {
    watchReset();
});

// This function will run watch timer
function watch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displaytime.innerHTML = h + ":" + m + ":" + s;
}

// This will start the watch
function watchStart() {
    if (timer !== null) {                   //This is for a profesional
        clearInterval(timer);
    }
    timer = setInterval(watch, 1000); //After every 1 second this will continue runing
}

// This will stop the watch
function watchStop() {
    clearInterval(timer);
}


// This will reset the watch
function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displaytime.innerHTML = "00:00:00";
}
