const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')
const btnGoBack = document.getElementById('go-back')

console.log(btn1, btn2, btn3)

btn1.addEventListener('click', () => {
    history.pushState({page: 1}, '', '/page1')
})

btn2.addEventListener('click', () => {
    history.pushState({page: 2}, '', '/page2')
})

btn3.addEventListener('click', () => {
    history.pushState({page: 3}, '', '/page3')
})

btnGoBack.addEventListener('click', () => {
    history.back()
})


document.body.addEventListener('popstate', () => {
    console.log('Event has been fired')
})


