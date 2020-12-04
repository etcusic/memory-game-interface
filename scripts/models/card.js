class Card {
    constructor(hash){
        this.id = hash.id
        this.side_a = hash.side_a
        this.side_b = hash.side_b
        this.deck_id = hash.deck_id
        // console.log(this)
    }

    // add a param for if someone wants to decide on side A or side B
    // should probably add a getter and setter for this function
    htmlNode(){
        const card = document.createElement('div')
        card.setAttribute('data-card', `${this.id}`)
        card.setAttribute('class', "quiz-card card center-align")
        card.innerText = this.side_b
        return card
    }
}