class Game {
    // Should I make instances of Game?? - 
    // create GameLog class with instances -> then I can load a game log instance into Game class
    constructor(timer, deck){
        this.timer = timer
        this.deck = Game.shuffle(deck)
        this.score = 0
        this.round = 0
    }

    sleep() {
        return new Promise(resolve => setTimeout(resolve, 1000));
    } 

    static shuffle(array){
        return array.sort(() => Math.random() - 0.5)
    }

    currentCard() {
        return this.deck[this.round]
    }

    displayTerm() {
        document.getElementById('term-value').innerText = this.currentCard()['side_a']
    }

    displayRound(){
        let thirtyOne = Game.shuffle(this.deck.filter(card => card !== this.currentCard()))
        let nine = Game.shuffle([this.currentCard(), ...thirtyOne.slice(0, 8)])
        this.displayTerm()
        displayNineCards(nine)
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
        // incorporate 1 second delay for answer ??
        document.getElementById('score-value').innerHTML = this.score
        this.round += 1
        wipeCards()
        this.displayRound()
    }

    async play(){
        // set timer for each question rather than long countdown
        this.displayRound()
        while (this.timer > 0 && this.score < 2){// this.deck.length){
            this.timer -= 1
            document.getElementById('timer-value').innerHTML = this.timer
            await this.sleep()
        }
        Game.over(this)
    }

    static over(game) {
        wipeCards()
        document.getElementById('term-value').innerText = "GAME OVER"
        // send fetch update here

        // better game over display

        // HOW DO I DELETE GAME ???
        // this does not quite work
        delete game.deck
        delete game.timer
        delete game.score
        delete game.round
    }

    static loadGame(deckArray){
        console.log('game loaded')
        const deck = deckArray.map(x => new Card(x))
        let game = new Game(60, deck)
        //should I make these global constants ??? - or maybe a DOM class with these elements as class methods?
        // => DOM.adjustTimer(x) => document.getElementById('timer-value').innerHTML = x
        document.getElementById('timer-value').innerHTML = game.timer
        document.getElementById('score-value').innerHTML = game.score
        document.getElementById('apply-options').addEventListener('click', () => game.play())
        document.querySelectorAll(".quizzers").forEach(cardNode => cardNode.addEventListener('click', () => game.checkAnswer(cardNode)))
    }

}