





// function onSubmit() {
    

    
 
// }

export let submit = document.getElementById('submit-btn')

submit.addEventListener('click', e => {

    e.preventDefault()
    

})

export let inputs = {
    name: document.getElementById('name'),
    surname: document.getElementById('surname'),
    gender: document.getElementById('gender'),
    city: document.getElementById('cities'),
    adress: document.getElementById('adress'),
    languages: document.querySelectorAll('input[type="checkbox"]:checked'),
}

