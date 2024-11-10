  export const getTime = document.getElementById('time')



 export class StopWatch {
    constructor(seconds, minutes, hours, clearInterval) {
        this.seconds = seconds
        this.minutes = minutes
        this.hours = hours
        this.clearInterval = null
    }

   

    setTime(display) {
        this.clearInterval = setInterval(() => {
            
           
             this.seconds++


            if(this.seconds === 60) {
                this.seconds = 0
                this.minutes++
            }

            if(this.minutes === 60) {
                this.minutes = 0
                this.hours++
            }

             display.textContent = `${this.seconds.toString().padStart(2, 0)}:${this.minutes.toString().padStart(2, 0)}:${this.hours.toString().padStart(2, 0)}`
            console.log(getTime)
        }, 1000)
    }

    pause() {
        clearInterval(this.clearInterval)
     }

    resetTime(display) {
        clearInterval(this.clearInterval)
        this.seconds = 0
        this.minutes = 0
        this.hours = 0
        display.textContent = `${stopWatch.seconds.toString().padStart(2, 0)}:${stopWatch.minutes.toString().padStart(2, 0)}:${stopWatch.hours.toString().padStart(2, 0)}`

    }
}

 export let stopWatch = new StopWatch(0, 0, 0, null)

console.log(stopWatch)