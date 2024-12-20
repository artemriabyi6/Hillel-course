export let basket = document.getElementById('basket')
export let basketarray = []
basket.textContent = `Basket(${localStorage.length})`

export function displayBasket() {
    let basketTitle = document.createElement('h2')
    basketTitle.textContent = 'Here is your products list: '
    let  productsBox = document.getElementById('productsBox')
    productsBox.innerHTML = ''

    // basketarray.forEach(el => {
    //     productsBox.append(el)
        
        
    // })
     productsBox.prepend(basketTitle)

    

    for(let i = 0; i < localStorage.length; i++) {

        let itemBox = document.createElement('div')
        let itemTitle = document.createElement('h2')
        let itemPrice = document.createElement('p')
        let deleteButton = document.createElement('button')


        let key = localStorage.key(i)
        let value = localStorage.getItem(key)
        let parsedValue = JSON.parse(value)

        itemBox.classList.add('basket-item')
        itemTitle.textContent = parsedValue.name
        itemPrice.textContent = `$${parsedValue.price}`
        deleteButton.textContent = 'Delete'
        deleteButton.style.background = 'tomato'
        deleteButton.style.cursor = 'pointer'

        itemBox.append(itemTitle)
        itemBox.append(itemPrice)
        itemBox.append(deleteButton)

        productsBox.append(itemBox)

        deleteButton.addEventListener('click', (e) => {
            localStorage.removeItem(key)
            basket.textContent = `Basket(${localStorage.length})`
            
            let target = e.target
            let parent = target.parentElement

            productsBox.removeChild(parent)
        })
    }
}