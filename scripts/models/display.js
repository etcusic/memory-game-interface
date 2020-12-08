class Display {

    // NODE = {
    //     div: document.createElement('div'),
    //     ol: document.createElement('ol'),
    //     ul: document.createElement('ul'),
    //     li: document.createElement('li')

    // }
    
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
        container.setAttribute('id', 'high-scores-container')
        container.setAttribute('class', 'container purple lighten-2 white-text z-depth-4')
        return container
    }

    static divWrap () {
        // make one of these for reusability
        return document.createElement('div')
    }

    static orderedList () {
        const ol = document.createElement('ol')
        ol.setAttribute('id', 'high-scores-list') //- is this helpful ?? - use div wrapper for CSS instead?
        ol.setAttribute('class', 'collection')
        return ol
    }

    static highScores (gameLogs) {
        const row = this.divWrap()
        row.setAttribute('class', 'row')
        row.setAttribute('id', 'listymaker')
        const wrap = this.divWrap()
        wrap.setAttribute('class', 'col s10 push-s1')
        const container = this.scoresContainer()
        const ol = this.orderedList()
        gameLogs.forEach(element => {
            let node = document.createElement('li')
            node.setAttribute('class', 'collection-item purple lighten-2 white-text')
            node.innerText = `level: ${element.level}, score: ${element.score}, deck_id: ${element.deck_id}, user_id: ${element.user_id}`
            ol.appendChild(node)
        });
        wrap.appendChild(ol)
        wrap.appendChild(this.resetButton())
        row.appendChild(wrap)
        container.appendChild(row)
        document.getElementById('game-container').appendChild(container)
    }

    static resetButton () {
        const button = document.createElement('button')
        button.setAttribute('id', 'reset-page')
        button.setAttribute('class', 'left btn-small right')
        button.innerText = 'Reset to Play'
        button.addEventListener('click', () => this.reset())
        return button
    }

    static reset () {
        document.getElementById('game-container').replaceChild(Display.random(), document.getElementById('high-scores-container'))

        // Display.random()
    }

}