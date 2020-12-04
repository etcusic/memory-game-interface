document.addEventListener("DOMContentLoaded", () => {

    API.loadDecks()
    initializePage()    
    // loadMuppets()

    // getCardsButton()

})

// this activates landing page button to initialize application
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


function deckOption(deckInfo){
    const option = document.createElement('li')
    option.setAttribute('value', deckInfo.id)
    option.setAttribute('class', "collection-item purple lighten-2 white-text")
    option.innerHTML = deckInfo.title
    return option
}

function decksToDropdown(array){
    const listOfDecks = document.getElementById('fucked-up-dropdown')
    console.log(listOfDecks)
    array.forEach(function(deck){ 
        node = deckOption(deck)
        console.log(node)
        listOfDecks.appendChild(node)
        node.addEventListener('click', function(e) { 
            console.log(node.value)
            API.loadSpecificDeck(node.value)
        })
    })
}

function loadCards(array){
    console.log(array)
    displayNineCards(array.map(x => new Card(x)))
    console.log(array)
}

// add 9 cards to page
// this function needs to take an ID parameter
// function getCardsButton(){
//     document.getElementById('apply-options').addEventListener('click', function(e){
//         API.loadSpecificDeck(1)
//     })
// }

// need to add event listener onto each card
function displayNineCards(arrayOfCards){
    for (let i = 1; i < 10; i++){
        document.getElementById(`card-${i}`).appendChild(arrayOfCards[i].createNode())
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