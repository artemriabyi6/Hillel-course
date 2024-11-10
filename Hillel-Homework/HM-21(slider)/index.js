let elements = {
    leftArrow: document.getElementById('left'),
    rightArrow: document.getElementById('right'),
    image1: document.getElementById('image1'),
    image2: document.getElementById('image2'),
    image3: document.getElementById('image3'),
    image4: document.getElementById('image4'),
}

let counter = 0
let images = [image1, image2, image3, image4]

let checkState = function() {
    images.forEach((el) => {
        if(el.classList.contains('active')) {
             el.classList.remove('hidden')
        } else {
            el.classList.add('hidden')
        }
    })
    console.log(counter)
    counter === 0 ? elements.leftArrow.setAttribute('disabled', true) : elements.leftArrow.removeAttribute('disabled')
    counter === images.length - 1 ? elements.rightArrow.setAttribute('disabled', true) : elements.rightArrow.removeAttribute('disabled')

}

elements.leftArrow.addEventListener('click', () => {
    counter--
    images[counter].classList.add('active')
    images[counter + 1].classList.remove('active')

    checkState()
})

elements.rightArrow.addEventListener('click', () => {
    counter++
    images[counter].classList.add('active')
    images[counter - 1].classList.remove('active')
    checkState()
})

checkState()