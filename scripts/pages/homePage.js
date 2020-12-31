class HomePage extends Page {

    static init(session) {
        Initialize.newPromise(this.wipeAll())
        .then(this.buildPage(this.initialView(session)))
        .then( API.loadDecks(session) )
    }

    static initialView (session) {
        return {
            panel: [SidePanel.userName(session), SidePanel.decksUl()],
            main: [Main.openingBanner(), Main.optionsCard()]
        }
    }

    static appendDecks (deckInfo) {
        deckInfo.forEach( deck => document.getElementById('decks-ul').innerHTML += BasePage.deckLi(deck) )
    }
    
}