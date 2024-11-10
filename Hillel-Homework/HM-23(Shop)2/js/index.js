
// Get logo and basket
let headerElements = {
    logo: document.getElementById('logo'),
    basket: document.getElementById('basket')
}

let basketElemenents = {
    basketCounter: 0,
    basketArray: [],
    basketTitle: document.createElement('h2')
}




// Get and create all wrappers
let wrappers = {
    mainWrapper: document.getElementById('main-container'),
    productsWrapper: document.createElement('div'),
    categoryWrapper: document.createElement('div'),
}

// Create DOM elements for our categories 
let categories = {
    adidas: document.createElement('p'),
    nike: document.createElement('p'),
    puma: document.createElement('p')
}

// Add classes to our created wrappers
function addClassToWrappers() {
    wrappers.productsWrapper.classList.add('products-wrapper')
    wrappers.categoryWrapper.classList.add('category-wrapper')

    wrappers.mainWrapper.append(wrappers.productsWrapper)
    wrappers.productsWrapper.append(wrappers.categoryWrapper)
}
   
// add text contetnt to our categories
function addTextContentToCategories() {
    categories.adidas.textContent = 'Adidas'
    categories.nike.textContent = 'Nike'
    categories.puma.textContent = 'Puma'
}

// add Elements to DOM
function addElementsToDOM() {

    //invoke functions 
    addTextContentToCategories()
    addClassToWrappers()

    wrappers.mainWrapper.prepend(categories.puma)
    wrappers.mainWrapper.prepend(categories.nike)
    wrappers.mainWrapper.prepend(categories.adidas)

}

// invoke our function
addElementsToDOM()


// Create class for product card
class ProductCard {
    constructor(name, price, category, id) {
        this.name = name
        this.price = price
        this.category = category
        this.id = id

        this.elements = {
        card: document.createElement('div'),
        cardTitle: document.createElement('h3'),
        cardPrice:  document.createElement('p'),
        cardDescription: document.createElement('p'),
        cardBtn: document.createElement('button')
        }
    }

   addValuesToElements() {
    this.elements.cardTitle.textContent = this.name
    this.elements.cardPrice.textContent = this.price
   }

    addToCard() {
        this.elements.card.append(this.elements.cardTitle)
        this.elements.card.append(this.elements.cardPrice)
    }

    addClass() {
         this.elements.card.classList.add(this.category)
    }

    addToWrapper(container) {
        this.addClass()
        this.addValuesToElements()
        this.addToCard()
        container.append(this.elements.card)
    }

    addMoreInformationAboutProduct() {
        switch(this.name) {
            case 'Campus': 
                this.elements.cardDescription.textContent = `${this.name} is the most beatiful sneakers`
                break;
            case 'Dunk': 
                this.elements.cardDescription.textContent = `${this.name} is the most fashion one`
                break;
            case 'Nitro': 
                this.elements.cardDescription.textContent = `${this.name} is the most comfort one`
                break;
            case 'Force': 
                this.elements.cardDescription.textContent = `${this.name} is the most comfort one`
                break;
            case 'Air-Max': 
                this.elements.cardDescription.textContent = `${this.name} is the most comfort one`
                break;
        }

        this.elements.cardBtn.textContent = 'Buy'
        this.elements.cardBtn.style.display = 'block'
        this.elements.cardDescription.style.display = 'block'
        this.elements.card.append(this.elements.cardDescription)
        this.elements.card.append(this.elements.cardBtn)

    }
   
}

// Create cards
const product1 = new ProductCard('Campus', 2500, 'adidas', 1)
const product2 = new ProductCard('Predator', 2500, 'adidas', 2)
const product3 = new ProductCard('Tech', 2500, 'adidas', 3)
const product4 = new ProductCard('Force', 2500, 'nike', 4)
const product5 = new ProductCard('Air-Max', 2500, 'nike', 5)
const product6 = new ProductCard('Dunk', 2500, 'nike', 6)
const product7 = new ProductCard('Nitro', 2500, 'puma', 7)
const product8 = new ProductCard('Future', 2500, 'puma', 8)
const product9 = new ProductCard('Bingo', 2500, 'puma', 9)

// Add all products to array
let products = [product1, product2, product3, product4, product5, product6, product7, product8, product9]



//Add more information about product
    products.forEach(product => product.elements.card.addEventListener('click', (e) => {
        addMoreInformationAboutProductToDOM(product)
    
        const hideOtherProducts = products.filter((product) => {
            console.log(e.target)
            return e.currentTarget !== product.elements.card
        })
    
        hideOtherProducts.forEach(product => product.elements.card.style.display = 'none')
        console.log(hideOtherProducts)
    }))



// Add product description to DOM
function addMoreInformationAboutProductToDOM(product) {
   product.addMoreInformationAboutProduct()
   
}



// Add all product cards to DOM
products.forEach(product => product.addToWrapper(wrappers.categoryWrapper))

// create custom event
function eventedPushState(state, title, url) {
    var pushChangeEvent = new CustomEvent('onpushstate', {
        detail:{
            state,
            title,
            url
        },
    });
    document.dispatchEvent(pushChangeEvent)
    return history.pushState(state, title, url)
}

// Get information about URL
const baseLocation = {
    origin: window.location.origin,
    pathname: window.location.pathname
}

function displayBasket() {

        products.forEach(product => product.elements.card.style.display = 'none')

       
        basketElemenents.basketArray.forEach((product) => {
            product.elements.card.style.display = 'block'
          
            wrappers.categoryWrapper.append(product.elements.card)
        })

        clearProductDescpition()
        
}
// dynamic check URL
function checkURL() {

    if(window.location.href === 'http://127.0.0.1:5500/index.html') {
        products.forEach(product => product.elements.card.style.display = 'none')
        basketElemenents.basketTitle.textContent = ''
    } 
    

    if(window.location.href === 'http://127.0.0.1:5500/adidas') {
        const adidasProducts = products.filter(product => {
           return product.elements.card.classList.contains('adidas')
        })
      products.forEach(product => product.elements.card.style.display = 'none')
      adidasProducts.forEach(product => product.elements.card.style.display = 'block')
      basketElemenents.basketTitle.textContent = ''

    }

    if(window.location.href === 'http://127.0.0.1:5500/nike') {
        const nikeProducts = products.filter(product => {
           return product.elements.card.classList.contains('nike')
        })
      products.forEach(product => product.elements.card.style.display = 'none')
      nikeProducts.forEach(product => product.elements.card.style.display = 'block')
      basketElemenents.basketTitle.textContent = ''

    }

    if(window.location.href === 'http://127.0.0.1:5500/puma') {
        const pumaProducts = products.filter(product => {
           return product.elements.card.classList.contains('puma')
        })
      products.forEach(product => product.elements.card.style.display = 'none')
      pumaProducts.forEach(product => product.elements.card.style.display = 'block')
      basketElemenents.basketTitle.textContent = ''

    }

    if(window.location.href === 'http://127.0.0.1:5500/basket') {
        products.forEach(product => product.elements.card.style.display = 'none')
        basketElemenents.basketTitle.textContent = 'Here is your product list:'
        wrappers.productsWrapper.prepend(basketElemenents.basketTitle)
        displayBasket()
    }
}

function clearProductDescpition() {
    products.forEach((product) => {
        product.elements.cardDescription.style.display = 'none'
        product.elements.cardBtn.style.display = 'none'
    })

    //  basketElemenents.basketTitle.textContent = ''
}

// Add Event listeners to each element
headerElements.logo.addEventListener('click', (e) => {
    eventedPushState({data: {name: 10} }, '', '/index.html')
    checkURL()
    clearProductDescpition()
    e.preventDefault() 
})

headerElements.basket.addEventListener('click', (e) => {
    eventedPushState({data: {name: 10} }, '', '/basket')
    
    checkURL()
    displayBasket()
    e.preventDefault()
})

categories.adidas.addEventListener('click', () => {
    eventedPushState({data: {name: 10} }, '', '/adidas')
    checkURL()
    clearProductDescpition()
})

categories.nike.addEventListener('click', () => {
    eventedPushState({data: {name: 10} }, '', '/nike')
    checkURL()
    clearProductDescpition()
})

categories.puma.addEventListener('click', () => {
    eventedPushState({data: {name: 10} }, '', '/puma')
    checkURL()
    clearProductDescpition()
})



products.forEach(product => product.elements.card.addEventListener('click', () => {
    eventedPushState({data: {name: 10} }, '', `/${product.category}/${product.id}` )
    checkURL()
}))


products.forEach(product => product.elements.cardBtn.addEventListener('click', (e) => {
   e.preventDefault()

   alert('Product had been added to basket')

   basketElemenents.basketArray.push(product)

   headerElements.basket.textContent = `Basket(${basketElemenents.basketArray.length})`

    displayBasket()
}))

checkURL()











// function templateCard(category, price) {
//     const cardBox = document.createElement('div')
//     cardBox.classList.add(`${category}`)

//     const title = document.createElement('h3')
//     const priceEl = document.createElement('p')

//     title.textContent = category
//     priceEl.textContent = price

//     cardBox.append(title)
//     cardBox.append(priceEl)
//     mainWrapper.append(cardBox)
// }


// function rendering() {
//     if(window.location.pathname === '/adidas') {

//        let adidasProduct = products.filter(product => product.category === 'adidas')

//        adidasProduct.forEach(product => {
        
//         mainWrapper.append(templateCard(product.category, 2500, 3))
//        });
    
//     } else {
       
//     }
// }

// categories.adidas.addEventListener('click', () => {
//     eventedPushState({data:  { name:1 } }, "", '/adidas' )
//     rendering()
// })

// categories.nike.addEventListener('click', () => {
//     eventedPushState({data:  { name:2 } }, "", '/nike' )
// })

// categories.puma.addEventListener('click', () => {
//     eventedPushState({data:  { name:3 } }, "", '/puma' )
// })




