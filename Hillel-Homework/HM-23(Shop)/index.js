
const getBasket = document.getElementById('basket')
const displayBasketList = document.getElementById('display-basket-list')
const basketTitle = document.getElementById('basket-title')
const categoriesBox = document.getElementById('categories-box')
const getCategories = document.querySelectorAll('.category')
const flowersBox = document.getElementsByClassName('show-flowers')
const toysBox = document.getElementsByClassName('show-toys')
const snacksBox = document.getElementsByClassName('show-snacks')
const getCategoriesItems = document.querySelectorAll('.item')
const getMainContainer  =document.getElementById('main-container') 
const flowerCategory = flowersBox[0]
const toysCategory = toysBox[0]
const snacksCategory = snacksBox[0]
const basketArr = []
let basketCounter = 0
let changeDisplay = 1

function homePage() {
    flowerCategory.classList.add('show-flowers')
    toysCategory.classList.add('show-toys')
    snacksCategory.classList.add('show-snacks')
    flowerCategory.classList.remove('show-true')
    toysCategory.classList.remove('show-true')
    snacksCategory.classList.remove('show-true')
   

}

getCategories.forEach(category => {
    category.addEventListener('click', event => {
        if(event.target === getCategories[0]) {
            // getMainContainer.classList.toggle('container')
            // getMainContainer.classList.toggle('container-flex')
            flowerCategory.classList.toggle('show-true')
            flowerCategory.classList.toggle('show-flowers')
            flowerCategory.classList.contains('show-true') ? toysCategory.classList.remove('show-true') : null;
            flowerCategory.classList.contains('show-true') ? snacksCategory.classList.remove('show-true') : null;
        } else {
            flowerCategory.classList.add('show-flowers')
        }

        if(event.target === getCategories[1]) {
            // getMainContainer.classList.toggle('container')
            // getMainContainer.classList.toggle('container-flex')
            toysCategory.classList.toggle('show-true')
            toysCategory.classList.toggle('show-toys')
            toysCategory.classList.contains('show-true') ? flowerCategory.classList.remove('show-true') : null;
            toysCategory.classList.contains('show-true') ? snacksCategory.classList.remove('show-true') : null;

        } else {
            toysCategory.classList.add('show-toys')
        }

        if(event.target === getCategories[2]) {
            // getMainContainer.classList.toggle('container')
            // getMainContainer.classList.toggle('container-flex')
            snacksCategory.classList.toggle('show-true')
            snacksCategory.classList.toggle('show-snacks')
            snacksCategory.classList.contains('show-true') ? toysCategory.classList.remove('show-true') : null;
            snacksCategory.classList.contains('show-true') ? flowerCategory.classList.remove('show-true') : null;

        } else {
            snacksCategory.classList.add('show-snacks')
        }
    })
})

function addProduct(product) {
    basketCounter++
    const displayProduct = document.createElement('p')
    displayProduct.textContent = product
    basketArr.push(product)
    getBasket.textContent = `Basket🧺(${basketCounter})`
    alert(`${product} had been succsessfuly added to basket`)

    const item = document.createElement('p')
    item.textContent = `${(basketCounter)}) ${basketArr[basketCounter - 1]}`
    displayBasketList.append(item) 
    console.log(basketCounter)
}

getBasket.addEventListener('click', (e) => {
    changeDisplay++
    displayBasketList.classList.toggle('show-basket')
    if(changeDisplay % 2 === 0) {
        e.preventDefault()
        getMainContainer.style.display = 'none'
        displayBasketList.style.display = 'flex'
    } else {
        getMainContainer.style.display = 'flex'
        displayBasketList.style.display = 'none'
        e.preventDefault()
    }

    basketArr.length > 0 ? basketTitle.textContent = 'Here is your order list:' : basketTitle.textContent = 'Your basket is empty'
   
})







