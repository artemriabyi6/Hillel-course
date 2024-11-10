export class ProductCard {
    constructor(name, price,) {
        this.name = name
        this.price = price
        this.category = this.name
       
        this.wrappers = {
            mainContainer: document.getElementById('main-container'),
            cardsWrapper: () => {
                let cardBox = document.createElement('div')
                cardBox.classList.add('card-box')
                this.wrappers.mainContainer.append(cardBox)
                return cardBox
            }
        }

        this.elements = {
        card: document.createElement('div'),
        cardTitle: document.createElement('h3'),
        cardPrice:  document.createElement('p')
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

    addToWrapper() {
        this.addClass()
        this.addValuesToElements()
        this.addToCard()
        this.wrappers.cardsWrapper().append(this.elements.card)
    }


}

