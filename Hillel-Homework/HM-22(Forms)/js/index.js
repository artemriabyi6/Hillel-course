import * as logic from "./logic.js"
import * as ui from "./ui.js"


let unitedObj = Object.assign(logic.inputs, ui.inputsUI)

console.log(unitedObj)

logic.submit.addEventListener('click', () => {
    ui.inputsUI.displayName.textContent = `Name is: ${logic.inputs.name.value}`
    ui.inputsUI.displaySurName.textContent = `Surname is: ${logic.inputs.surname.value}`
    ui.inputsUI.displayGender.textContent = `Gender is: ${document.querySelector('input[type="radio"]:checked').value}`
    ui.inputsUI.displayCity.textContent = `City is: ${document.querySelector('#cities').value}`
    ui.inputsUI.displayAdress.textContent = `Adress is: ${document.querySelector('#adress').value}`
    let checkedValues = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    console.log(checkedValues)
    ui.inputsUI.displayLanguages.textContent = `Languages are: ${checkedValues.map(el => el.value)}`




    document.body.append(ui.inputsUI.displayName)
    document.body.append(ui.inputsUI.displaySurName)
    document.body.append(ui.inputsUI.displayGender)
    document.body.append(ui.inputsUI.displayCity)
    document.body.append(ui.inputsUI.displayAdress)
    document.body.append(ui.inputsUI.displayLanguages)
    

    

   
})

