class ActionListener {

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

    static highScoresList (session) {
        document.getElementById('scores-index-button').addEventListener('click', () => {
            Initialize.highScoresPage(session)
        })
    }

    static quizCards (game) {
        document.querySelectorAll(".quizzers").forEach(cardWrapper => cardWrapper.addEventListener('click', () => game.checkAnswer(cardWrapper)))
    }

    static basePageButton (session) {
        document.querySelector('.base-page-button').addEventListener('click', () => {
            Initialize.basePage(session)
        })
    }

    static scoresIndexButton (session) {
        document.getElementById('scores-index-button').addEventListener('click', () => {
            Initialize.highScoresPage(session)
        })
    }

    static playGameButton (session) {
        document.getElementById('play-game-button').addEventListener('click', () => {
            Game.wipeCards()
            Initialize.playGamePage(session)
        })
    }

    static quitGameButton (session) {
        document.getElementById('quit-game-button').addEventListener('click', () => {
            session.game.end = true
        })
    }

    static submitScoreButton (session, gameLog) {
        document.getElementById('submit-score-button').addEventListener('click', () => {
            delete session.game 
            API.uploadGameLog(gameLog)
            Initialize.basePage(session)
        })
    }

}