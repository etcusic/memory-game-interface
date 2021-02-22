import { Session } from '../models/session.js'
import { Game } from '../models/game.js'
import { Card } from '../models/card.js'
import { OpeningPage } from '../pages/openingPage.js'
import { GamePage } from '../pages/gamePage.js'

export class Initialize {

    static newPromise (myFunction) {
        return new Promise(() => myFunction)
    }

    static session (id, name) {
        const newSession = new Session (id, name)
        OpeningPage.beaker(newSession)
    }

    static game (deck, cards, session) {
        deck.createCards(cards)
        let newGame = new Game (session, deck)
        newGame.deck.cards = cards.map(card => new Card (card.id, card.side_a, card.side_b))
        newGame.deck.shuffleAndSet('A')
        session.game = newGame
        GamePage.init(session)
    }

}