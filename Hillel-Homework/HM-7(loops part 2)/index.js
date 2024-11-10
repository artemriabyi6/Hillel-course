
// let displayResult = '';

// for(let i = 20; i <= 30; i+= 0.5) {
// displayResult += i + ' '
// }

// alert(displayResult)

// console.log(displayResult)

// let displayResult = ''
// const dollar = 27

// for(let i = 10; i <= 100; i += 10) {
//     displayResult += i * dollar + ' '
// }

// alert(displayResult)

// let displayResult = ''
// let num = 77

// for(let i = 0; i <= 100; i++) {
//     Math.pow(i, 2) <= num ? displayResult += i + ' ' : console.log('error') 
// }

// alert(displayResult)



function isPrime(num) {
    if (num <= 1) {
      return false; // Числа менші або рівні 1 не є простими
    }
  
    // Перевіряємо дільники до квадратного кореня числа
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        console.log('Дільник знайдено: ', i)
        console.log(`Square root is: `,Math.sqrt(num))
        return false; // Якщо знайшли дільник, то число не є простим
      }
    }
  
    return true; // Якщо не знайшли дільників, число є простим
  }
  
  // Приклад використання
  let number = 80;
  console.log('Is number prime: ', isPrime(number)); // true
  





// let randomNum = 9
// let checkedNum = 3

// for(let i = 0; i <= 10; i++) {
//     Math.pow(checkedNum, i) === randomNum ? console.log(`random number is ${checkedNum} power ${i}`) : null;
// }

