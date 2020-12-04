class Game {
    // Should I make instances of Game??
    constructor(timer, score, deck){
        this.timer = timer
        this.score = score
        this.deck = deck
    }

    play(){
        console.log(this.deck)
        console.log("Play Ball!")
    }

    static loadGame(deckArray){
        const deck = deckArray.map(x => new Card(x))
        console.log(deck)
        let game = new Game(60, 0, deck)
        document.getElementById('timer-value').innerHTML = game.timer
        document.getElementById('term-value').innerHTML = "-----"
        document.getElementById('score-value').innerHTML = game.score
        document.getElementById('apply-options').addEventListener('click', () => game.play())
    }

}