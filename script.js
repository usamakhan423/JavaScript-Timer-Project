setInterval(() => {
    function date() {
        let now = new Date();
        console.log(now)
    
        const minutes = now.getMinutes()
        console.log(minutes)
    
        const hours = now.getHours()
        console.log(hours)
    
        const seconds = now.getSeconds()
        console.log(seconds)

        

        if(hours.value < 10) {
            hours = `0${hours}`
        }
        if(minutes.value < 10) {
            minutes = `0${minutes}`
        }
    
        const currentTime = document.querySelector(".current-time");
        currentTime.innerHTML = `${hours} : ${minutes} : ${seconds}`
        

        
    }
    date()
}, 1000);

