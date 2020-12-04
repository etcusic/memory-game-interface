document.addEventListener("DOMContentLoaded", () => {

    API.loadDecks()
    initializePage()    
    // loadMuppets()

    document.getElementById('bullshit-initializer').addEventListener('click', function(e){
        initializeMaterialize()
    })

    getCardsButton()

})

function initializePage(){
    document.querySelectorAll('.base-page-button').forEach(item => {
        item.addEventListener('click', event => {
            let landing_page = document.getElementById('landing-page-wrapper')
            let main_page = document.getElementById('main')
            landing_page.style.display = 'none'
            main_page.style.display = 'block'
            initializeMaterialize()
        })
    })
}

// this is for development - use initializePage() for actual program
function initializeMaterialize(){
    $(document).ready(function(){
        $('select').formSelect();
    });
}

function appendCard(card){
    return `
        <div class="quiz-card card col s2 light-blue darken-4 white-text center-align">
            ${card.side_b}
        </div>`
}

function displayCards(array){
    const gameContainer = document.getElementById('game-container')
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

function loadCards(array){
    // why the fuck won't map work???
    // array.map(x => x = new Card(x))
    // console.log(array)

    let empty = []
    array.forEach(function(e){
        let x = new Card(e)
        empty.push(x)
    })
    displayNineCards(empty)
}

// add 9 cards to page
function getCardsButton(){
    document.getElementById('apply-options').addEventListener('click', function(e){
        API.loadSpecificDeck(1)
    })
}

// need to add event listener onto each card
function displayNineCards(arrayOfCards){
    for (let i = 1; i < 10; i++){
        document.getElementById(`card-${i}`).appendChild(arrayOfCards[i].node)
    }
}

