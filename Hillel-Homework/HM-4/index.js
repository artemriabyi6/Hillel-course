const chooseOperation = prompt('What do you wanna do?')
const firstNum = prompt('Enter first number')
const secondNum = prompt('Enter second number')


switch(chooseOperation) {
    case 'add': alert(Number(firstNum) + Number(secondNum))
                break;
    case 'sub': alert(Number(firstNum) - Number(secondNum))
                break;
    case 'mult': alert(Number(firstNum) * Number(secondNum))
                break;
    case 'div' : alert(Number(firstNum) / Number(secondNum))
                break
}

