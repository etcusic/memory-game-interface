class API {

    static loadMuppets () {
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then(data => infoToDropdown(data))
    }

    static loadDecks() {
        fetch("http://localhost:3000/decks")
        .then(resp => resp.json())
        .then(data => decksToDropdown(data))
    }

    static loadSpecificDeck(id) {
        fetch(`http://localhost:3000/decks/${id}/cards`)
        .then(resp => resp.json())
        .then(deck => Game.loadGame(id, deck))
    }


    static loadGameLogs(){
        console.log('hello')
        fetch("http://localhost:3000/game_logs")
        .then(resp => resp.json())
        .then(gameLogs => HighScores.applyList(gameLogs))
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
            })
            // add catch
    }

}