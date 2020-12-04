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

    // async webPage() {
    //     while (pause.innerHTML === ' pause ') {
    //         count += 1
    //         console.log(count)
    //         counter.innerHTML = count
    //     }
    // }

    async play(){
        console.log("Initialize cards here!")
        while (this.timer > 0){
            this.timer -= 1
            document.getElementById('timer-value').innerHTML = this.timer
            await this.sleep()
        }
        console.log('yay!')
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