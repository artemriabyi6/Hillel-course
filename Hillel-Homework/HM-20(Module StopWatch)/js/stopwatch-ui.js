
export class StopWatchUi {
    constructor(initialTime) {

        this.initialTime = initialTime

        this.wrappers = {
            stopwatchWrapper: document.getElementById('stopwatch-wrapper'),
            navWrapper: document.getElementById('nav')
        }

        this.buttons = {
            startBtn: document.createElement('button'),
            pauseBtn: document.createElement('button'),
            resetBtn: document.createElement('button')
        }

        this.h2 = document.createElement('h2')
    }

    appEnd() {
         this.h2.textContent = `${this.initialTime.seconds.toString().padStart(2, 0)}:${this.initialTime.minutes.toString().padStart(2, 0)}:${this.initialTime.hours.toString().padStart(2, 0)}`
         this.buttons.startBtn.textContent = 'Start'
         this.buttons.pauseBtn.textContent = 'Pause'
         this.buttons.resetBtn.textContent = 'Reset'

        this.wrappers.stopwatchWrapper.prepend(this.h2)
        this.wrappers.navWrapper.append(this.buttons.startBtn)
        this.wrappers.navWrapper.append(this.buttons.pauseBtn)
        this.wrappers.navWrapper.append(this.buttons.resetBtn)
    }

    setTime(time) {
        this.h2.textContent = `${time.seconds.toString().padStart(2,0)}:${time.minutes.toString().padStart(2,0)}:${time.hours.toString().padStart(2,0)}`
    }


    addStartBtnListener(callback) {
        this.buttons.startBtn.addEventListener('click', callback)
        
    }

    addPauseBtnListener(callback) {
        this.buttons.pauseBtn.addEventListener('click', callback)
    }

    addResetBtnListener(callback) {
        this.buttons.resetBtn.addEventListener('click', callback)
    }

}



