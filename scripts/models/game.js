class Game {
    // Should I make instances of Game??
    constructor(timer, score, deck){
        this.timer = timer
        this.score = score
        this.deck = deck
    }

    sleep() {
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    displayRound(deck){
        const htmlTerm = document.getElementById('term-value')
        let currentTerm = deck[0]
        let quizArray = deck.slice(1)
        htmlTerm.innerText = currentTerm.side_a
        return [...quizArray, currentTerm]
    }

    async play(){
        console.log("Initialize cards here!")
        while (this.timer > 0 || this.score < this.deck.length){
            this.displayRound(this.deck)
            this.timer -= 1
            document.getElementById('timer-value').innerHTML = this.timer
            await this.sleep()
        }
        console.log('yay!')
    }

    static loadGame(deckArray){
        //add a query select for all quiz cards
        const deck = deckArray.map(x => new Card(x))
        console.log(deck)
        let game = new Game(60, 0, deck)
        document.getElementById('timer-value').innerHTML = game.timer
        document.getElementById('term-value').innerHTML = "-----"
        document.getElementById('score-value').innerHTML = game.score
        document.getElementById('apply-options').addEventListener('click', () => game.play())
    }

}