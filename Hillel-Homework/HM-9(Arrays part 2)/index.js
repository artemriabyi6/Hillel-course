const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

let displayResult = arr.filter((item) => {
    return item >= 0 ? item : console.log(`this num less than zero`)
})

sum = arr.reduce((acc, item) => {
    return acc + item
},0)

console.log(displayResult)
console.log(sum)
