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
        const cardNode = document.createElement('div')
        cardNode.setAttribute('data-card', `${this.id}`)
        cardNode.setAttribute('class', "quiz-card card center-align z-depth-4")
        cardNode.setAttribute('value', this.side_a)
        cardNode.innerText = this.side_b
        // cardNode.addEventListener('click', Game.checkAnswer(this.side_a))
        return cardNode
        // return `
        //     <div data-card=${this.id} value=${this.side_a} class="quiz-card card center-align z-depth-4">
        //     ${this.side_b}
        //     </div>
        // `
    }

}