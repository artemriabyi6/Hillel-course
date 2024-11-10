 let i = 0
// let counter = 0
// do {
//     console.log('iteration')
//     alert('type smth')
//     counter++
    
// } while( counter < 5)


// while(i < 5 ) {
//  i++
//  alert('new iteration')
// }
let userAnswer
do{
    userAnswer = Number(prompt('Enter your age'))
    isNaN(userAnswer) ? alert('type correct age') : null;
    
}while(isNaN(userAnswer)) 