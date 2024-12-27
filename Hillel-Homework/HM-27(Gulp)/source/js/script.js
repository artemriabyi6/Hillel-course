
const btn = document.getElementById('btn')

const toggleText = document.getElementById('toggle-text')

btn.addEventListener('click', () => {
    btn.classList.toggle('show')
    checkClasses()
    
})

function checkClasses() {
    btn.classList.contains('show') ? toggleText.textContent = 'hey junior 🙋‍♂️' : toggleText.textContent = ''
}