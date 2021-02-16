class HomePage extends Page {

    static init(session) {
        this.wipeAll()   // wipeAll and bulidPage are in the Page parent class
        this.buildPage(this.initialView(session))
        SetListener.scoresIndexButton(session)
        API.loadDecks(session)
    }

    static initialView (session) {
        return {
            panel: [SidePanel.userName(session), SidePanel.decksUl()],
            main: [Main.openingBanner(), Main.optionsCard()]
        }
    }

    static appendDecks (deckInfo) {
        deckInfo.forEach( deck => document.getElementById('decks-ul').innerHTML += SidePanel.deckLi(deck) )
    }
    
}