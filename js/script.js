let container = document.querySelector('.container');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let Body = document.querySelector('.body');


    setInterval(function Day(){
            let date = new Date();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let hours = date.getHours();

            DayPeriod(hours)

                if (hours <= 9) hours = '0' + hours;
                if (minutes <= 9) minutes = '0' + minutes;
                if (seconds <= 9) seconds = '0' + seconds;

            hour.innerHTML = `${hours}`
            minute.innerHTML = `${minutes}`
            second.innerHTML = `${seconds}`

        function DayPeriod(hours){
            if (hours >= 6 && hours < 12){
                Body.setAttribute('class', 'morning');
            }else if (hours >= 12 && hours <= 17){
                Body.setAttribute('class', 'partTime');
            }else if (hours >= 18 && hours < 19){
                Body.setAttribute('class', 'sunset');
            }else if (hours >= 19){
                Body.setAttribute('class', 'nigth');
            }

            return;
        }            
    })
        