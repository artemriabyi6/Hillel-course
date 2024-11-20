let obj = {
    name: 'product',
    id: 1,
    category: 'flowers'
}
let obj1= {
    name: 'product1',
    id: 2,
    category: 'cars'
}
let obj2 = {
    name: 'product2',
    id: 3,
    category: 'books'
}

localStorage.setItem('basket1', JSON.stringify(obj))
localStorage.setItem('basket2', JSON.stringify(obj1))
localStorage.setItem('basket3', JSON.stringify(obj2))


document.addEventListener('DOMContentLoaded', () => {
    for(let i = 1; i < localStorage.length; i++) {
        const parseString = JSON.parse(localStorage.getItem(`basket${i}`))
        const elBox = document.createElement('div')
        const elTitle = document.createElement('h3')
        const elId = document.createElement('p')
        const elCategory = document.createElement('p')
    
        elTitle.textContent = parseString.name
        elId.textContent = parseString.id
        elCategory.textContent = parseString.category
        elBox.append(elTitle)
        elBox.append(elId)
        elBox.append(elCategory)

        document.body.append(elBox)
    }
   

    

    elBox.append(elTitle)
    elBox.append(elId)
    elBox.append(elCategory)

    document.body.append(elBox)
})