function Student(name, lastName, birthday, array ) {
    this.name = name
    this.lastName = lastName
    this.birthday = birthday
    this.array = array
    this.isPresent = Array(25).fill(null)

    this.avarageRate = function() {
       let res;

       res = (this.array.reduce((acc, el) => acc + el, 0)) / this.array.length

        return res        
    }

    this.yearsOld = function() {
        let res;

        res = new Date().getFullYear() -  this.birthday

        return res
    }

    this.absent = function() {
        return this.counter < 25 ?  this.isPresent[this.counter] = false : null
       // return this
    }

    this.present = function() {
        return this.counter < 25 ?  this.isPresent[this.counter] = true : null
        // return this
    }

    this.summary = function () {
        this.avarageRate()
        
        let mapRes =  this.isPresent.map((el, index) => index % 2 === 0 ? el = this.absent(this.isPresent) : el = this.absent(this.isPresent))
       
        let res = mapRes.reduce((acc, el) => acc + el, 0)
        let total =  [this.avarageRate(), res ]
        
        console.log(total)

        if(total[0] >= 90 && Number(total[1]) >= 0.9) {
             alert('Well done!')
        } else if(total[0] >= 90 || Number(total[1]) >= 0.9) {
             alert('You might better!')
        } else {
             alert('You doing bad!')
        }
    }
}

let instance = new Student('artem', 'riabyi', 1990, [90, 90, 90, 90, 90])

console.log(instance.summary())
