import { Page } from './page.js'
import { API } from '../services/API.js' 
import { SetListener } from '../classes/setListener.js'
import { userName } from '../components/userName.js'
import { decksUl } from '../components/decksUl.js'
import { openingBanner } from '../components/openingBanner.js'
import { optionsCard } from '../components/optionsCard.js'
import { deckLi } from '../components/deckLi.js'

export class HomePage extends Page {

    static init(session) {
        this.wipeAll()   // wipeAll and bulidPage are in the Page parent class
        this.buildPage(this.initialView(session))
        SetListener.scoresIndexButton(session)
        API.loadDecks(session)
    }

    static initialView (session) {
        return {
            panel: [userName(session), decksUl()],
            main: [openingBanner(), optionsCard()]
        }
    }

    static appendDecks (deckInfo) {
        deckInfo.forEach( deck => document.getElementById('decks-ul').innerHTML += deckLi(deck) )
    }
    
}