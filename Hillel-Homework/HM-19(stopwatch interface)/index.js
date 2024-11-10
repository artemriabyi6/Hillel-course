let onTick = (time) => domElements.display.textContent = 
`${time.seconds.toString().padStart(2,0)}:${time.minutes.toString().padStart(2,0)}:${time.hours.toString().padStart(2,0)}`


let domElements = {
    container: document.getElementById('container'),
    stopWatch: document.getElementById('stopwatch'),
    display: document.getElementById('display'),
    startBtn: document.getElementById('start'),
    pauseBtn: document.getElementById('pause'),
    resetBtn: document.getElementById('reset')
}


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
                    this.time.hours++
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
        this.callback(this.time)
       
    }

    getTime() {
        this.callback(this.time)
    }
}

let stopWatch = new StopWatch(onTick)


domElements.startBtn.addEventListener('click', () => {stopWatch.start()})
domElements.pauseBtn.addEventListener('click', () => {stopWatch.stop()})
domElements.resetBtn.addEventListener('click', () => {stopWatch.reset()})



