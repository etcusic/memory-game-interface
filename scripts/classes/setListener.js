class SetListener {

    static homePageButton (session) {
        document.querySelector('.base-page-button').addEventListener('click', () => {
            HomePage.init(session)
        })
    }

    static scoresIndexButton (session) {
        document.getElementById('scores-index-button').addEventListener('click', () => {
            GameLogsPage.init(session)
        })
    }

    static muppetsList () {
        const muppets = document.querySelectorAll('.muppets-list')
        muppets.forEach(muppet => muppet.addEventListener('click', () => {
            Initialize.session(muppet.value, muppet.innerText)
        }))
    }

    static decksList (session) {
        const decks = document.querySelectorAll('.decks-list')
        decks.forEach( deck => deck.addEventListener('click', () => {            
            let newDeck = new Deck (deck.value, deck.innerText)
            API.loadCards(newDeck, session)  // this goes to Initialize.game() and then Initialize.playSetPage()
        }))
    }

}