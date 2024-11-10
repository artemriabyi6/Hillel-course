"use strict"
let a = 5;
let b = 7;

const add = function(a,b) {
    a = 17
    b = 15
    return a + b
}

console.log(add(a, b))
console.log('a is:', a)
console.log('b is:', b)

console.log((function(a = 5, b = 7){
    return a + b
})(2, 2))


let arrow = () => {
    console.log(this)
}

arrow()
console.log(this)

let person = {
    consoleThis: () => {console.log(this)}
}

person.consoleThis()

function arrowFunc () {
    return (function()  {
       return  this
    })()
}


console.log(arrowFunc())

function factorial(num) {
    return num === 0 ? num = 1 : num * factorial(num - 1)
}

console.log(factorial(5))



function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);  // multiplier = 2
const triple = createMultiplier(1);  // multiplier = 3
const sixteen = createMultiplier(16)

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(sixteen(3))
console.log(createMultiplier(3))


function createCounter() {
    let counter = 0
     
    return {
        increment: function() {
           counter += 1
           console.log(counter)
           return counter
        },

        getValue: function() {
            console.log(counter)
            return counter
        },

        reset: function() {
            counter = 0
            console.log(counter)
            return counter
        }
    }
}

const counter = createCounter()
 counter.increment()
 counter.increment()

 let str = '12345'
 

 let object = {
    person: 'user',

    context:  function() {
        console.log(this.person)
    }
 }

 

let object1 = {
    person: 'user2'
}

object.context.apply(object1)
