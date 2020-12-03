document.addEventListener("DOMContentLoaded", () => {

    console.log("working")
    loadDeck()

})

function loadDeck() {
    fetch("http://localhost:3000/decks/1/cards")
    .then(resp => resp.json())
    .then(data => console.log(data))
}