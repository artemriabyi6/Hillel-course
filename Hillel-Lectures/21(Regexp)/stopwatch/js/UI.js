import { getTime, stopWatch } from "../js/stopwatch.js";
import { StopWatch } from "../js/stopwatch.js";
const wrapper = document.getElementById('wrapper')
export const buttonsWrapper = document.getElementById('buttons')
const displayWatch = document.createElement('p')

export class StopWatchUI extends StopWatch {
        constructor(seconds, minutes, hours, clearInterval, initialTime){
            super(seconds, minutes, hours, clearInterval)

            this.initialTime = initialTime

        }

        createStartButton() {
            const startBtn = document.createElement('button')

             startBtn.addEventListener('click', ()=>{this.setTime(displayWatch)})
            

            startBtn.id = 'start-btn'
           

            startBtn.textContent = 'Start'
           

            buttonsWrapper.append(startBtn)
           
            return startBtn

        }

        createPauseButton() {
            
            const pauseBtn = document.createElement('button')

            pauseBtn.addEventListener('click', () =>{this.pause()})


            pauseBtn.id = 'pause-btn'
           
            pauseBtn.textContent = 'Pause'
          
            buttonsWrapper.append(pauseBtn)
           
            return pauseBtn
        }


        createResetButton() {
           
            const resetBtn = document.createElement('button')

            resetBtn.addEventListener('click', ()=>{this.resetTime(displayWatch)})
           
            resetBtn.id = 'reset-btn'

         
            resetBtn.textContent = 'Reset'

         
            buttonsWrapper.append(resetBtn)

            return resetBtn
        }

        createDisplay() {
           
            displayWatch.id = 'time'
            wrapper.prepend(displayWatch)
            displayWatch.textContent = `${this.seconds}:${this.minutes}:${this.hours}`
            console.log(this.seconds)
        }

        // displayTime() {
        //      this.setTime()
        // }
        

    }


 export const stopWatchUi =  new StopWatchUI(0, 0, 0, null)

//   stopWatchUi.createDisplay()
//   stopWatchUi.createStartButton()
//   stopWatchUi.createPauseButton()
//   stopWatchUi.createResetButton()

