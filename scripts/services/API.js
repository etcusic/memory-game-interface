class API {

    static loadDecks() {
        fetch("http://localhost:3000/decks")
        .then(resp => resp.json())
        .then(data => decksToDropdown(data))
    }

    static loadSpecificDeck(id) {
        // need to send array of cards to GAME
        fetch(`http://localhost:3000/decks/${id}/cards`)
        .then(resp => resp.json())
        .then(data => Game.loadGame(data))
    }


    // static loadGameLogs(){
    //     fetch("http://localhost:3000/game_logs")
    //     .then(resp => resp.json())
    //     .then(data => decksToDropdown(data))
    // }

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
              console.log(json)
            })
            // add catch
    }

}