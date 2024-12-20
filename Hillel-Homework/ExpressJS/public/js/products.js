import {eventedPushState} from './routing.js'
import { basket, basketarray } from "./basket.js"

export let products = [
    {category: 'flowers', name: 'tulip', id: 1, price: 10, detail: 'super cheap'},
    {category: 'flowers', name: 'rose', id: 3, price: 10, detail: 'super beatiful'},
    {category: 'flowers', name: 'sunflower', id: 4, price: 10, detail: 'super smell'},
    {category: 'lego', name: 'stitch', id: 2, price: 30, detail: 'super surprise'},
    {category: 'cars', name: 'megan', id: 5, price: 130, detail: 'super fast'},

]

export let groupBy = Object.groupBy(products, ({category}) => category)


// let counter = 0
export function renderProducts(category) {
    
    const products = groupBy[category]
    const productsBox = document.getElementById('productsBox')

    productsBox.innerHTML = ''

    products.forEach((el, index) => {

    const productContainer = document.createElement('div')
    const productTitle = document.createElement('h3')
    const productPrice = document.createElement('p')
    const productDetail = document.createElement('p')
    const buyBtn = document.createElement('button')
    
    productContainer.classList.add(`product-card`)
    productContainer.style.cursor = 'pointer'
    productTitle.textContent = el.name
    productPrice.textContent = `$${el.price}`
    buyBtn.style.display = 'none'

    productContainer.addEventListener('click', (e) => {
        
        productDetail.textContent = el.detail
        buyBtn.textContent = 'Buy'
        buyBtn.style.display = 'block'
        buyBtn.style.cursor = 'pointer'
        const newUrl = `/${category}/${el.id}`

        eventedPushState({}, '', newUrl)
    })

    buyBtn.addEventListener('click', (e) => {
        let target = e.target
        let parent = target.parentElement
        

        basketarray.push(parent)
        
        
        const ItemData = {category: el.category, name: el.name, id: el.id, price: el.price, detail: el.detail}
        
        localStorage.setItem(`Item ${Math.random()}`, JSON.stringify(ItemData))
        basket.textContent = `Basket(${localStorage.length})`
        alert('product has been succesfuly add to basket')
    })
    productContainer.append(productTitle)
    productContainer.append(productPrice)
    productContainer.append(productDetail)
    productContainer.append(buyBtn)
    productsBox.append(productContainer)
    
   

    })
    
}