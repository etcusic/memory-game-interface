class API {

    static loadDecks() {
        fetch("http://localhost:3000/decks")
        .then(resp => resp.json())
        .then(data => decksToDropdown(data))
    }

    static loadSpecificDeck(id) {
        console.log(id)
        console.log('working?')
        fetch(`http://localhost:3000/decks/${id}/cards`)
        .then(resp => resp.json())
        .then(data => loadCards(data))
    }

}