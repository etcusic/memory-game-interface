export class Deck {

    constructor (id, title) {
        this.id = id
        this.title = title
        this.cards = []
    }

    // setter function ??
    createCards (cardsFromAPI) {
        this.cards = cardsFromAPI.map( card => new Card (card.id, card.side_a, card.side_b))
    }

    static shuffle (arrayOfCards) {
        return arrayOfCards.sort(() => Math.random() - 0.5)
    }

    setCardSides (side) {
        switch (side) {
        case 'A':
            this.cards.map((card) => {
                card.node.innerText = card.sideA 
                card.node.value = card.sideB
            })
            break;
        case 'B':
            this.cards.map((card) => {
                card.node.innerText = card.sideB 
                card.node.value = card.sideA
            })
            break;
        }
    }

    shuffleAndSet (side) {
        Deck.shuffle(this.cards)
        this.setCardSides(side)
        return this.cards.map((card, index) => card.position = index + 1)
    }

}