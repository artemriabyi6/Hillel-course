let onTick = (time) => console.log(time)

class StopWatch {
    constructor(callback) {

        this.callback = callback

        this.time = {
            seconds: 0,
            minutes: 0,
            hours: 0
        }

        this.intervalId = false
    }

    start() {
        

          this.intervalId =  setInterval(() => {

                this.time.seconds++

                if(this.time.seconds === 60) {

                    this.time.seconds = 0
                    this.time.minutes++

                }

                if(this.time.minutes === 60) {
                    this.time.minutes = 0
                    this.hours++
                }

                this.callback(this.time)

            }, 1000)

        
    }

    stop() {
        clearInterval(this.intervalId)
       
    }

    reset() {
        clearInterval(this.intervalId)
        this.time = {
            seconds: 0,
            minutes: 0,
            hours: 0
        }
       
    }

    getTime() {
        this.callback(this.time)
    }
}

let stopWatch = new StopWatch(onTick)

stopWatch.start()