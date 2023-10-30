let container = document.querySelector('.container');
        let hour = document.querySelector('.hour');
        let minute = document.querySelector('.minutes');
        let second = document.querySelector('.seconds');

        setInterval(() => {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
    

                 hour.innerHTML = `${hours}`;
                 minute.innerHTML = `${minutes}`;
                 second.innerHTML = `${seconds}`;
            
                 if (hours <= 9 ){
                    hour.innerHTML = `0${hours}`;
                }
                 else if (minutes <= 9){
                    minute.innerHTML = `0${minutes}`;
                }
                 if (seconds <= 9){
                    second.innerHTML = `0${seconds}`
                }
        }, 1000)