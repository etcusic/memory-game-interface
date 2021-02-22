import { Initialize } from '../classes/initialize.js'
import { Deck } from './deck.js'
import { GamePage } from '../pages/gamePage.js'

export class Game {
    
    // side A or B needs to be added - applied @ Deck.shuffleAndSet
    constructor (session, deck) {
        this.session = session
        this.deck = deck
        this.timer = 10
        this.score = 0
        this.round = 1
        this.quizCard = new Card (0, 0, 0) 
        this.currentCard = {}
        this.end = false
        // this.level = level  // will need to go through and adjust where timer is hard coded in application
    }

    async play () { 
        this.quizCard.node.setAttribute('id', 'answer-card')
        this.displayRound()
        while ( !this.end && this.round < this.deck.cards.length ){ 
            this.timer -= 1
            document.getElementById('timer-value').innerHTML = this.timer
            await this.sleep()
            if (this.timer === 0){
                this.outOfTime()
            }
        }
        this.gameOver()
    }

    static wipeCards () {
        document.querySelectorAll(".quizzers").forEach(cardNode => cardNode.removeChild(cardNode.children[0]))
    }

    static appendCards (cardsArray) {
        cardsArray.forEach((card, index) => {
            document.getElementById(`card-div-${index}`).appendChild(card.node)
        })
    }

    sleep () {
        return new Promise(resolve => setTimeout(resolve, 1000));
    } 

    checkAnswer (cardNode) {
        const answer = cardNode.children[0]
        if (answer.value === document.getElementById('answer-card').innerText) {
            this.score += this.timer
        } else {
            this.score -= this.timer
        }
        document.getElementById('score-value').innerText = this.score
        this.timer = 10
        // incorporate a pause and display after every answer
        // create a correct and incorrect card and replace center card with that after every answer
        Initialize.newPromise(this.sleep)
        .then(this.nextRound())
    }

    nextRound () {
        document.getElementById('score-value').innerHTML = this.score
        this.round += 1
        Game.wipeCards()
        this.displayRound()
    } 

    displayRound () {
        let cards = Deck.shuffle(this.deck.cards)
        this.currentCard = cards.find(card => card.position === this.round)
        this.quizCard.node.innerText = this.currentCard.node.value
        let eightCards = [this.currentCard, ...cards.filter(card => card.position !== this.round).slice(0, 7)]
        Game.appendCards([this.quizCard, ...Deck.shuffle(eightCards)])
    }

    gameOver () {
        console.log('game over')
        this.end = true
        document.getElementById('term-value').innerText = "GAME OVER"
        Game.wipeCards() 
        GamePage.displayFinal(this.session, {user_id: this.session.userId, deck_id: this.deck.id, score: this.score})
    }

    outOfTime () {
        this.score -= 1
        this.timer = 10
        this.nextRound()
    }
   
}