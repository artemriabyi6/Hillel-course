import { products, renderProducts, groupBy } from "./products.js"
import { displayBasket } from "./basket.js"
console.log(groupBy.flowers.forEach(el => console.log(el.name)))

export let references = {
    ['public/index.html']: document.getElementById('homepage'),
    basket: document.getElementById('basket'),
    flowers: document.getElementById('flowers'),
    cars: document.getElementById('cars'),
    lego: document.getElementById('lego')
}


export function eventedPushState(state, title, url) {

    const customEvent = new CustomEvent('onpushstate', {
        detail: {
            state,
            title,
            url
        }
    })

    dispatchEvent(customEvent)
    return history.pushState(state, title, url)
}

export function checkURL() {
    switch(window.location.pathname) {
        case '/flowers' : 
                          renderProducts('flowers')
                          document.getElementById('productsBox').style.flexDirection = 'inherit'
                          break;
        case '/cars' :    renderProducts('cars')
                          document.getElementById('productsBox').style.flexDirection = 'inherit'
                          break;
        case '/lego' :    renderProducts('lego')
                          document.getElementById('productsBox').style.flexDirection = 'inherit'
                          break;
        case '/public/index.html' : document.getElementById('productsBox').innerHTML = ''
                                   
                          break;
        case '/basket' :  displayBasket()
                          document.getElementById('productsBox').style.flexDirection = 'column'
                          document.getElementById('productsBox').style.gap = '20px'
                          break;

    }
}

for(let reference in references) {
    references[reference].addEventListener('click', (e) => {
        e.preventDefault()
        eventedPushState({}, '', `/${reference}`)
        checkURL()
    })
}

checkURL()