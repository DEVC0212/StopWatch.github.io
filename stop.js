let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");

let hour = 00;
let min = 00;
let sec = 00;
let count = 00;

startbtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopbtn.addEventListener('click', function () {
    timer = false;
});

resetbtn.addEventListener('click',function(){
    timer = false;
    hour = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("digHr").innerHTML = "00";
    document.getElementById("digMin").innerHTML = "00";
    document.getElementById("digSec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        count++;
        if (count == 60) {
            sec++;
            count = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if(min == 60){
            hour++;
            min = 0;
            sec = 0;
        }

        let hr = hour;
        let mn = min;
        let sc = sec;

        if (hour < 10) {
            hr = "0" + hr;
        }
        if (min < 10) {
            mn = "0" + mn;
        }
        if (sec < 10) {
            sc = "0" + sc;
        }
        document.getElementById("digHr").innerHTML = hr;
        document.getElementById("digMin").innerHTML = mn;
        document.getElementById("digSec").innerHTML = sc;
        document.getElementById("count").innerHTML = count;
        setTimeout(stopWatch,20);
    }
}
