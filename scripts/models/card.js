class Card {
    constructor(hash){
        this.id = hash.id
        this.side_a = hash.side_a
        this.side_b = hash.side_b
        // this.node = this.createNode()
        // would it be better to create node here? how would I designate side A or B being shown??
    }

    // add a param for if someone wants to decide on side A or side B
    createNode(){
        const cardNode = document.createElement('div')
        cardNode.setAttribute('data-card', `${this.id}`)
        cardNode.setAttribute('class', "quiz-card card center-align z-depth-4")
        cardNode.setAttribute('value', this.side_a)
        cardNode.innerText = this.side_b
        return cardNode
    }

}