//DON'T MESS WITH THE JAVASCRIPT CODE! IT'S READONLY! YOU SHOULD USE THE TYPESCRIPT FILE

let hour:HTMLElement | null = document.getElementById('hour');
let minute:HTMLElement | null = document.getElementById('minute');
let seconds:HTMLElement | null = document.getElementById('seconds');

let clock:number = setInterval(
    function time(): void {
        let date_now: Date = new Date();
        let hourNow: string = date_now.getHours().toString();
        let minuteNow: string = date_now.getMinutes().toString();
        let secondsNow: string = date_now.getSeconds().toString();

        if (parseInt(hourNow) < 10) {
            hourNow = "0" + hourNow;
        }
        if(parseInt(minuteNow) < 10){
            minuteNow = "0" + minuteNow;
        }
        if(parseInt(secondsNow) < 10){
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
    },
    1000
)