//1. Дано масив з елементами різних типів. 
//Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

// let arr = [true, false, 'string', 1, 5, 7, true, {}, []]

// function calculateSumOfArray(array) {

//     let filterArray = array.filter((el) => {
//         return typeof el === 'number'
//     })

//     let showSum = 0

//     for(let i = 0; i < filterArray.length; i++) {
//         showSum += filterArray[i]
//     }

//     return showSum

// }


// console.log(calculateSumOfArray(arr))




//2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути:
// +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.
//Обидва числа і знак виходять від користувача.

// let x = Number(prompt('Type first num'))
// let action = prompt('Type kinda action')
// let y = Number(prompt('Type usecond num'))

// function doMath(x, action, y) {
    
//     let res;

//     switch(action) {
//         case '-' : res = x - y
//                   break;
//         case '+' : res = x + y
//                   break;
//         case '/' : res = x / y
//                   break;
//         case '*' : res = x * y
//                   break;
//         default: console.error('Type is not recognized')  
//     }

//     return res

// }

// console.log(doMath(x, action, y))


/*
Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. 
Значення всіх елементів всіх масивів задає користувач. 
*/

// let lengthOfMainArray = Number(prompt('Enter length of main array'))

// let arr = Array(lengthOfMainArray)

// for(let i = 0; i < lengthOfMainArray; i++) {
//     // debugger
//     let el = []
//     let lengthOfEl = Number(prompt(`Type length of ${i + 1} subarray`))
    
//     for(let j = 0; j < lengthOfEl; j++) {
//         let subEl = prompt(`Enter ${j + 1} element of subarray`)
//         el.push(subEl)
//     }

//     arr[i] = el
// }


//  console.log(arr)



/*
4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач. 
*/

// function deleteChars(str, charsToRemove) {
//     let res = ''

//     for(let char of str) {
//         if(!charsToRemove.includes(char)) {
//             res += char
//         } 
//     }
    
//     return res
// }   

// console.log(deleteChars('hello world', ['l', 'd']))