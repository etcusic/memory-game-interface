class API {

    static loadMuppets () {
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then(muppetData => OpeningPage.appendMuppets(muppetData))
        .then(() => SetListener.muppetsList())
    }

    static loadDecks(session) {
        fetch("http://localhost:3000/decks")
        .then(resp => resp.json())
        .then(deckInfo => HomePage.appendDecks(deckInfo))
        .then(() => SetListener.decksList(session))
    }

    static loadCards(deck, session) {
        fetch(`http://localhost:3000/decks/${deck.id}/cards`)
        .then(resp => resp.json())
        .then(cards => Initialize.game(deck, cards, session))
    }

    static loadGameLogs(session){
        fetch("http://localhost:3000/game_logs")
        .then(resp => resp.json())
        .then(gameLogs => GameLogsPage.appendHighScores(gameLogs))
        .then(() => SetListener.homePageButton(session))
    }

    static uploadGameLog (gameLog) {
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(gameLog)
        }

        fetch("http://localhost:3000/game_logs", configObject)
            .then(function(response){
                return response.json()
            })
            .then(function(json){
                // do I need to do something with the data here ??
              console.log(json)
              console.log("should I do something here??")
            })
            // add catch
    }

}