const loggedInBtn = document.getElementById('loggedInBtn')
const loggedOutBtn = document.getElementById('loggedOutBtn')


const isLoggedIn = () => {

    const logpart = document.cookie.startsWith('loggedIn')
    if(logpart) {
        loggedOutBtn.removeAttribute('hidden')
        loggedInBtn.setAttribute('hidden', true)
        
    } else {
        loggedOutBtn.setAttribute('hidden', true)
        loggedInBtn.removeAttribute('hidden')
    }
    return Boolean(logpart)
}

state = {
    isLoggedIn: isLoggedIn(),
    text: 'logout'
}

loggedInBtn.addEventListener('click', (e) => {
    document.cookie = 'loggedIn=1'
    loggedOutBtn.removeAttribute('hidden')
    loggedInBtn.setAttribute('hidden', true)
})

loggedOutBtn.addEventListener('click', (e) => {
    document.cookie = 'loggedIn=1;max-age=0'
    loggedInBtn.removeAttribute('hidden')
    loggedOutBtn.setAttribute('hidden', true)
})