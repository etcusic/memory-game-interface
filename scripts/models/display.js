class Display {

    // constructor with a node attr ?? that way the Display.node can be deleted - or can I use getters and setters ??
    
    static nineCards () {
        const wrapper = document.createElement('div')
        wrapper.setAttribute('id', 'nine-cards')
        this.row(1, wrapper)
        this.row(4, wrapper)
        this.row(7, wrapper)
        return wrapper
    }

    static row (num, divNode) {
        let newRow = document.createElement('div')
        newRow.setAttribute('id', `quiz-row-${num}`)
        newRow.setAttribute('class', 'row quiz-row')
        this.cards(num, newRow)
        divNode.appendChild(newRow)
        // return newRow
    }

    static cards (num, row){
        for (let i = 0; i < 3; i++){
            let card = document.createElement('div')
            card.setAttribute('id', `card-${i + num}`)
            card.setAttribute('class', 'quizzers col s4')
            row.appendChild(card)
            // return card
        }
    }

    static random () {
        const div = document.createElement('div')
        div.setAttribute('id', 'random')
        return div
    }

    static scoresContainer () {
        const container = document.createElement('div')
        container.setAttribute('class', 'container purple lighten-2 white-text')
        return container
    }

    static orderedList () {
        const ol = document.createElement('ol')
        ol.setAttribute('id', 'high-scores-list') //- is this helpful ?? - use div wrapper for CSS instead?
        return ol
    }

    static highScores (gameLogs) {
        const container = this.scoresContainer()
        const ol = this.orderedList()
        gameLogs.forEach(element => {
            let node = document.createElement('li')
            console.log(element.level)
            node.innerText = `level: ${element.level}, score: ${element.score}, deck_id: ${element.deck_id}, user_id: ${element.user_id}`
            ol.appendChild(node)
        });
        container.appendChild(ol)
        document.getElementById('game-container').appendChild(container)
    }

}