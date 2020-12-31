class Initialize {

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
 
    static landingPage () {
        this.newPromise( Display.buildPage(LandingPage.initialView()) )
        .then( API.loadMuppets() )
    }

    static beakerPage (session) {
        this.newPromise(Display.wipeAll())
        .then( Display.buildPage(BeakerPage.initialView(session)) )
        .then( BeakerPage.setListeners(session) )
    }

    static basePage (session) {
        this.newPromise(Display.wipeAll())
        .then( Display.buildPage(BasePage.initialView(session)) )
        .then( API.loadDecks(session) )
    }

    // ActionListeners need some work in reference to their pages/views/stages
    static playSetPage (session) {
        this.newPromise(Display.wipeAll())
        .then( Display.buildPage(PlaySetPage.initialView(session)) )
        .then( document.getElementById('term-value').innerText = session.game.deck.title )
        .then( document.querySelectorAll('.quizzers').forEach( div => div.appendChild(Card.blank()) ))
        .then( PlaySetPage.setListeners(session) )
    }
   
    static playGamePage (session) {
        this.newPromise(Display.wipePanel())
        .then( Display.buildPanel([PlayGamePage.panelHTML(session)]))
        .then( session.game.play())
        .then( PlayGamePage.setListeners(session) )
    }

    static gameOverPage (session, gameLog) {
        // adjust scoreboard in Display.buildPage
        this.newPromise(Display.wipePanel())
        .then( Display.buildPage(GameOverPage.initialView(session)) )
        .then( GameOverPage.setListeners(session, gameLog) )
    }

    static highScoresPage (session) {
        this.newPromise(Display.wipeAll())
        .then( Display.buildPage(HighScoresPage.initialView(session)) )
        .then( API.loadGameLogs(session) )
    }

}