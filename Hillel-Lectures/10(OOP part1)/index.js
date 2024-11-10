// closure example

let closure = (function () {
    let counter = 0
    return (n) => {
        counter += n
        return counter
    }
})()

closure(2)
closure(5)
console.log(closure(0)) //counter = 7