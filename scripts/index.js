document.addEventListener("DOMContentLoaded", () => {

    loadDecks()

    let initializationButton = document.getElementById('bullshit-initializer')
    initializationButton.addEventListener('click', function(e){
        $(document).ready(function(){
            $('select').formSelect();
        });
    })
    
    // loadMuppets()

})

function appendCard(card){
    return `
        <div class="quiz-card card col s2 light-blue darken-4 white-text center-align">
            ${card.side_b}
        </div>`
}

function displayCards(array){
    const gameContainer = document.getElementById('game-container')
    console.log(gameContainer)
    array.forEach(element => {
        gameContainer.innerHTML += appendCard(element)
    });
}

function deckOption(deckInfo){
    const option = document.createElement('option')
    option.setAttribute('value', deckInfo.title)
    option.innerHTML = deckInfo.title
    return option
}

function decksToDropdown(array){
    const decksDropdown = document.getElementById('decks-dropdown')
    array.forEach(function(deck){ 
        decksDropdown.innerHTML += `<option value=${deck.title}>${deck.title}</option>`
    })
}

function loadDecks() {
    fetch("http://localhost:3000/decks")
    .then(resp => resp.json())
    .then(data => decksToDropdown(data))
}

function loadSpecificDeck(id) {
    fetch(`http://localhost:3000/decks/${id}/cards`)
    .then(resp => resp.json())
    .then(data => displayCards(data))
}

