let arrayLength = Number(prompt('enter length of array'))

isNaN(arrayLength) ? alert('value must be a number') : null

let arr = []

for(let i = 0; i <= arrayLength - 1; i++) {
    let item = i
    arr.push(item)
}

arr.sort((a, b) => {
  return  a - b
})

console.log(arrayLength)
console.log(arr)