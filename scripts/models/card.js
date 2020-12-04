class Card {
    constructor(hash){
        this.id = hash.id
        this.side_a = hash.side_a
        this.side_b = hash.side_b
        this.deck_id = hash.deck_id
        // can I create my node attribute here?? - static createNode() ??
    }

    // add a param for if someone wants to decide on side A or side B
    // also add an event listener for each card
    createNode(){
        const card = document.createElement('div')
        card.setAttribute('data-card', `${this.id}`)
        card.setAttribute('class', "quiz-card card center-align z-depth-4")
        card.innerText = this.side_b
        return card
    }
}