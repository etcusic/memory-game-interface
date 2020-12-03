document.addEventListener("DOMContentLoaded", () => {

    console.log("working")
    loadDeck()

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

function loadDeck() {
    fetch("http://localhost:3000/decks/1/cards")
    .then(resp => resp.json())
    .then(data => displayCards(data))
}