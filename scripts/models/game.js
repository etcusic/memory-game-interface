class Game {
    // Should I make instances of Game??
    constructor(timer, deck){
        this.timer = timer
        this.deck = deck
        this.score = 0
        this.round = 0
    }

    sleep() {
        return new Promise(resolve => setTimeout(resolve, 1000));
    } 

    static shuffle(array){
        return array.sort(() => Math.random() - 0.5)
    }

    displayTerm(){
        // match card.id with this.round + 1
    }

    displayRound(deck){
        // need to add shuffling somewhere
        const htmlTerm = document.getElementById('term-value')
        let currentTerm = deck[0]
        htmlTerm.innerText = currentTerm.side_a
        displayNineCards([currentTerm, ...deck])
        // return [...quizArray, currentTerm]
    }

    async play(){
        this.displayRound(this.deck)
        while (this.timer > 0){
            this.timer -= 1
            document.getElementById('timer-value').innerHTML = this.timer
            await this.sleep()
        }
    }

    checkAnswer(answer){
        const termNode = document.getElementById('term-value')
        const cardNode = answer.children[0]
        if (termNode.innerText === cardNode.attributes[2].value){
            cardNode.style.background = 'green'
            this.score += 1
        } else {
            cardNode.style.background = 'red'
            this.score -= 1
        }
        document.getElementById('score-value').innerHTML = this.score
        // this.round += 1
        // this.displayRound()
    }

    static loadGame(deckArray){
        console.log('game loaded')
        console.log(Game.shuffle([1,2,3,4,5,6,7,8,9]))
        console.log(Game.shuffle([1,2,3,4,5,6,7,8,9]))
        console.log(Game.shuffle([1,2,3,4,5,6,7,8,9]))
        const deck = deckArray.map(x => new Card(x))
        let game = new Game(60, deck)
        //should I make these global constants ??? - or maybe a DOM class with these elements as class methods?
        // => DOM.adjustTimer(x) => document.getElementById('timer-value').innerHTML = x    
        document.getElementById('timer-value').innerHTML = game.timer
        document.getElementById('term-value').innerHTML = "-----"
        document.getElementById('score-value').innerHTML = game.score
        document.getElementById('apply-options').addEventListener('click', () => game.play())
        document.querySelectorAll(".quizzers").forEach(cardNode => cardNode.addEventListener('click', () => game.checkAnswer(cardNode)))
    }

}