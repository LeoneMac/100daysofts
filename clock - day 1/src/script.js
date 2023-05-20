"use strict";
//DON'T MESS WITH THE JAVASCRIPT CODE! IT'S READONLY! YOU SHOULD USE THE TYPESCRIPT FILE
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let seconds = document.getElementById('seconds');
let clock = setInterval(function time() {
    let date_now = new Date();
    let hourNow = date_now.getHours().toString();
    let minuteNow = date_now.getMinutes().toString();
    let secondsNow = date_now.getSeconds().toString();
    if (parseInt(hourNow) < 10) {
        hourNow = "0" + hourNow;
    }
    if (parseInt(minuteNow) < 10) {
        minuteNow = "0" + minuteNow;
    }
    if (parseInt(secondsNow) < 10) {
        secondsNow = "0" + secondsNow;
    }
    if (hour) {
        hour.textContent = hourNow;
    }
    if (minute) {
        minute.textContent = minuteNow;
    }
    if (seconds) {
        seconds.textContent = secondsNow;
    }
}, 1000);
