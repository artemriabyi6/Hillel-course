const names = [1, 2, 3, [4, 5, 6, {occupation: 'teacher'}]]

console.log(names[names.length - 1].at(-1).occupation)

let obj = {
    artem: 1,
    oleksandr: 1,
    ruslan: 5,
    artur: 0,
    maksym: 1
}

let obj2 = {
    artem: 0,
   
}

const [...rest] = Object.entries(obj)

Object.assign(obj, obj2)
console.log(obj)
console.log(rest)

console.log(rest[0][0])
console.log(Object.fromEntries(rest))


 const myObj = Object.create(obj)

for(const [key, value] of Object.entries(obj)) {
    console.log(key, value)
}

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];

console.log(Object.groupBy(inventory, ( { quantity } ) => quantity))


let copyWithin = [1, 22, 33, 4, 5]

console.log(copyWithin.copyWithin(0, 1, 2))

console.log(copyWithin.entries().next().value)


// for(variable of obj) {
//     console.log(variable)
// }

for(variable in obj) {
    console.log(variable)
}

console.log(copyWithin.reduce((acc, curr) =>{
    acc.push(curr * 2)
    return acc
}  ,[]))

console.log(copyWithin.indexOf(22))

for(let variable in obj2) {
    console.log(`${variable}: ${obj2[variable]}`)
}