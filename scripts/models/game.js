class Game {
    // Should I make instances of Game?? - 
    // create GameLog class with instances -> then I can load a game log instance into Game class
    constructor(){
        this.deck = []
        this.deckId = 0
        this.timer = 60
        this.score = 0
        this.round = 0
        this.question = ""
        this.currentCard = {}
        this.cardDisplay = {}
        // need to incorporate improvements here
        this.userId = 1
        this.level = 1
    }

    sleep() {
        return new Promise(resolve => setTimeout(resolve, 1000));
    } 

    static shuffle(array){
        return array.sort(() => Math.random() - 0.5)
    }

    displayTerm() {
        document.getElementById('term-value').innerText = this.currentCard.side_a
    }

    displayRound(){
        this.currentCard = this.deck[this.round]
        let thirtyOne = Game.shuffle(this.deck.filter(card => card !== this.currentCard))
        let nine = Game.shuffle([this.currentCard, ...thirtyOne.slice(0, 8)])
        this.question = this.currentCard.side_a
        this.displayTerm()
        displayNineCards(nine)
    }

    checkAnswer(answer){
        const cardNode = answer.children[0]
        if (this.question === cardNode.attributes[2].value){
            cardNode.style.background = 'green'
            this.score += 1
        } else {
            cardNode.style.background = 'red'
            this.score -= 1
        }
        this.nextRound()
    }

    nextRound () {
        document.getElementById('score-value').innerHTML = this.score
        this.round += 1
        wipeCards()
        this.displayRound()
    } 

    async play(){
        // set timer for each question rather than long countdown
        this.displayRound()
        // need the check for game over to be faster than what it is
        while (this.timer > 0 && this.score < 2){// this.deck.length){
            this.timer -= 1
            document.getElementById('timer-value').innerHTML = this.timer
            await this.sleep()
        }
        this.gameOver()
    }

    gameOver() {
        console.log('game over')
        document.getElementById('term-value').innerText = "GAME OVER"
        document.getElementById('game-container').replaceChild(GameOver.setDisplay(this.score), this.cardDisplay)
        GameOver.resetPageButton({level: this.level, score: this.score, deck_id: this.deckId, user_id: this.userId}) 
        delete this.cardDisplay
        // clean this up - better way than global constant GAME
        Object.assign(GAME, {deck: [], deckId: 0, timer: 60, score: 0, round: 0, question: "", currentCard: {}})
    }

    // move this to class Initialize ???
    static loadGame(deckId, deckArray){
        console.log('game loaded')
        GAME.deck = Game.shuffle(deckArray.map(x => new Card(x)))
        GAME.deckId = deckId
        GAME.cardDisplay = Display.nineCards()
        //should I make these global constants ??? - or maybe a DOM class with these elements as class methods?
        // => DOM.adjustTimer(x) => document.getElementById('timer-value').innerHTML = x
        document.getElementById('game-container').replaceChild(GAME.cardDisplay, document.getElementById('place-holder'))
        document.getElementById('timer-value').innerHTML = GAME.timer
        document.getElementById('score-value').innerHTML = GAME.score
        document.querySelectorAll(".quizzers").forEach(cardNode => cardNode.addEventListener('click', () => GAME.checkAnswer(cardNode)))

    }

}