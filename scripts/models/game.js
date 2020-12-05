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
        // document.querySelectorAll('quiz-card').addEventListener('click', )
        const htmlTerm = document.getElementById('term-value')
        let currentTerm = deck[0]
        htmlTerm.innerText = currentTerm.side_a
        // let quizArray = deck.slice(0, 10)
        displayNineCards([currentTerm, ...deck])
        // return [...quizArray, currentTerm]
    }

    async play(){
        this.displayRound(this.deck)
        // document.querySelectorAll('quizzerz').addEventListener('click', )
        // innerHTML += this.deck[0].createNode()

        // document.querySelectorAll(".quiz-card").addEventListener('click', () => Game.checkAnswer())
        while (this.timer > 0){
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
        document.querySelectorAll(".quizzers").forEach(x => x.addEventListener('click', () => Game.checkAnswer(x)))
    }

    //FUCK! NEED TO FIX THIS. TRIED ADDING EVENT LISTENER ON EACH CARD, BUT IT WAS INITIALIZING CLICKED 
    static checkAnswer(answer){
        const termNode = document.getElementById('term-value')
        const cardNode = answer.children[0]
        // console.log(answer.children[0].attributes[2].value)
        // console.log(termNode.innerText)
        if (termNode.innerText === cardNode.attributes[2].value){
            cardNode.style.background = 'green'
            console.log('correct')
        } else {
            cardNode.style.background = 'red'
            console.log('incorrect')
        }
    }
}