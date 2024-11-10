const userAge = prompt('How old are you?')
const userCity = prompt('Where are you from?')
const userSport = prompt('What is your favorite sport?')

let displayResult = `You are ${userAge} years old. You live in ${userCity}. Your favorite sport is ${userSport}`

if(isNaN(Number(userAge))) {
    alert('You have to enter only numbers')
} else {
    
}



switch(userCity) {
    case 'chernivtsi' : displayResult = 
                        alert(`You are ${Number(userAge)} years old. You live in the most beatiful city  ${userCity}. Your favorite sport is ${userSport}`)
                        break;
    case 'kyiv' :    displayResult = 
                        alert(`You are ${Number(userAge)} years old. You live in the capital  city of Ukraine . Your favorite spors is ${userSport}`)
                        break;                  
}

switch(userSport) {
    case 'football' : displayResult = 
    alert(`You are ${Number(userAge)} years old. You live in ${userCity}. Your favorite sport is ${userSport}, do you wanna be like Cristiano Ronaldo?`)
    break;
    case 'basketball' : displayResult = 
    alert(`You are ${Number(userAge)} years old. You live in ${userCity}. Your favorite sport is ${userSport}, do you wanna be like Lebron James?`)
    break
}

alert(displayResult)