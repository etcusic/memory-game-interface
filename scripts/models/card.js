class Card {

    constructor (id, side_a, side_b) {
        this.id = id
        this.sideA = side_a
        this.sideB = side_b
        this.position = 0
        this.node = Card.blank()
    }

        static blank () {
            let div = document.createElement('div')
            div.setAttribute('class', 'quiz-card card center-align z-depth-4')
            return div
        }

}