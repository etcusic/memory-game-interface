document.addEventListener("DOMContentLoaded", () => {

    API.loadDecks()
    initializePage()    
    // loadMuppets()

    document.getElementById('bullshit-initializer').addEventListener('click', function(e){
        initializeMaterialize()
    })

    getCardsButton()

})

// this is activated by landing page button - ultimately goes in doc.addEventListener
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

function deckOption(deckInfo){
    const option = document.createElement('option')
    option.setAttribute('value', deckInfo.title)
    option.innerHTML = deckInfo.title
    return option
}

function decksToDropdown(array){
    const decksDropdown = document.getElementById('decks-dropdown')
    array.forEach(function(deck){ 
         node = deckOption(deck)
         node.addEventListener(e => API.loadSpecificDeck(deck.id))
        decksDropdown.appendChild(node)
    })
}

function loadCards(array){
    displayNineCards(array.map(x => new Card(x)))
}

// add 9 cards to page
// this function needs to take an ID parameter
function getCardsButton(){
    document.getElementById('apply-options').addEventListener('click', function(e){
        API.loadSpecificDeck(1)
    })
}

// need to add event listener onto each card
function displayNineCards(arrayOfCards){
    for (let i = 1; i < 10; i++){
        document.getElementById(`card-${i}`).appendChild(arrayOfCards[i].createNode())
    }
}

