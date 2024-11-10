

export class StopWatch {
    constructor(onTick) {

        this.time = {
            seconds: 0,
            minutes: 0,
            hours: 0
        }

        this.intervalId = null
        this.onTick = onTick
        
    }

    start() {
        if(!this.intervalId) {

             this.intervalId =  setInterval(() => {
                this.time.seconds++
                if(this.time.seconds === 60) {
                    this.time.seconds = 0
                    this.time.minutes++
                }

                if(this.time.minutes === 60) {
                    this.time.minutes = 0
                    this.time.hours++
                }


                this.onTick(this.time)
                
                
            }, 1000)
        }
    }

    pause() {
        if(this.intervalId) {
            clearInterval(this.intervalId)
        }
        this.intervalId = null
        this.onTick(this.time)
    }

    reset() {
        clearInterval(this.intervalId)
        this.time = {
            seconds: 0,
            minutes: 0,
            hours: 0
        }
        this.intervalId = null
        this.onTick(this.time)

    }
}
const onTick = (time) => console.log(time)
const stopwatch = new StopWatch(onTick)

 