document.addEventListener("DOMContentLoaded", () => {

    API.loadDecks()
    initializePage()   
    GAME = {} 

})

// this activates landing page button to initialize application
function initializePage(){
    document.querySelectorAll('.base-page-button').forEach(item => {
        item.addEventListener('click', event => {
            let landing_page = document.getElementById('landing-page-wrapper')
            let main_page = document.getElementById('main')
            landing_page.style.display = 'none'
            main_page.style.display = 'block'
            // new Game(60, deck)
            // initializeMaterialize()
        })
    })
}


function deckOption(deckInfo){
    const option = document.createElement('li')
    option.setAttribute('value', deckInfo.id)
    option.setAttribute('class', "collection-item purple lighten-2 white-text")
    option.innerHTML = deckInfo.title
    option.addEventListener('click', function(e) { 
        API.loadSpecificDeck(option.value)
        document.getElementById('term-value').innerHTML = deckInfo.title
    })
    return option
}

function decksToDropdown(array){
    const listOfDecks = document.getElementById('fucked-up-dropdown')
    array.forEach(function(deck){ 
        node = deckOption(deck)
        listOfDecks.appendChild(node)
    })
}

// add 9 cards to page
function wipeCards(){
    document.querySelectorAll(".quizzers").forEach(function(cardNode){
        let child = cardNode.children[0]
        cardNode.removeChild(child)
    })
}

function displayNineCards(arrayOfCards){
    for (let i = 0; i < 9; i++){
        const node = arrayOfCards[i].createNode()
        // should change this - each card will have a node attr, and a corresponding data-set number
        document.getElementById(`card-${i+1}`).appendChild(node)
    }
}






// MATERIALIZE DROPDOWN SELECTOR - WON'T FUCKING RESPOND TO CLICKS!!!!!

// function getCardsButton(){
//     document.getElementById('apply-options').addEventListener('click', function(e){
//         API.loadSpecificDeck(1)
//     })
// }
// function initializeMaterialize(){
//     $(document).ready(function(){
//         $('select').formSelect();
//         console.log($('select'))
//     });
// }

// function deckOption(deckInfo){
//     const option = document.createElement('option')
//     option.setAttribute('value', deckInfo.id)
//     option.innerHTML = deckInfo.title
//     return option
// }

// function decksToDropdown(array){
//     const decksDropdown = document.getElementById('dropdown-two')
//     array.forEach(function(deck){ 
//         node = deckOption(deck)
//         decksDropdown.appendChild(node)
//         node.addEventListener('click', function(e) { 
//             console.log("clicked")
//             // decksDropdown.value = `${deckInfo.id}`
//         })
//     })
// }