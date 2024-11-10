
//  function unitTest() {
//     let displayResult = '';

//     for(let i = 10; i <= 20; i++) {
//         displayResult += i + ', '
//     }

//     return displayResult
//  }



//  module.exports = unitTest

// function unitTest() {
//     let displayResult = '';

//     for (let i = 10; i <= 20; i++) {
//         displayResult += i + ', ';
//     }

//     return displayResult;
// }

// // Експортуємо саму функцію
// module.exports = unitTest;
 
 

// alert(displayResult)


// for(let i = 10; i <= 20; i++) {
//     displayResult += (Math.pow(i, 2)) + ', '
// }

// alert(displayResult)


// for(let i = 1; i <= 15; i++) {
//     displayResult = Number(displayResult) + i
// }

// alert(displayResult)


// for(let i = 15; i <= 35; i++) {
//     displayResult = Number(displayResult) * i
// }

// alert(displayResult)
function unitTest() {
    let displayResult = 0;
    for(let i = 1; i <= 500; i++) {
        displayResult += i
    }

    return displayResult / 500
}


console.log(unitTest())

module.exports = unitTest


// for(let i = 30; i <= 80; i++) {
//     i % 2 === 0 ? displayResult += i : null 
// }

// alert(displayResult)

// for(let i = 100; i <= 200; i++) {
//     i % 3 === 0 ? console.log(i) : null
// }

// let randomNum = Math.floor(Math.random() * 10) + 1

// for(let i = 0; i <= randomNum; i++) {
//     randomNum % i === 0 ? console.log(randomNum, i): console.log('error')
// }

// let randomNum = Math.floor(Math.random() * 10) + 1

// for(let i = 0; i <= randomNum; i++) {
//    if(randomNum % i === 0 && i % 2 === 0) {
//     console.log(randomNum, i)
//    } 
// }


// let randomNum = Math.floor(Math.random() * 10) + 1

// for(let i = 0; i <= randomNum; i++) {
//    if(randomNum % i === 0 && i % 2 === 0) {
//     displayResult += i
//    } 
// }

// console.log(randomNum, displayResult)



// for(let i = 1; i <= 10; i++) {
//     for(let j = 1; j <= 10; j++) {
//         document.body.append((i * j))
//     }
// }

