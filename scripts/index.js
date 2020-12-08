document.addEventListener("DOMContentLoaded", () => {

    API.loadDecks()
    Initialize.opening() 
    // Initialize.gameLogIndex()
    // this is super vulnerable, isn't it ??? -> Session class??  
    GAME = new Game

    document.getElementById('game-container').appendChild(NODE.placeHolder)
    document.getElementById('apply-options').addEventListener('click', () => GAME.play())
    document.getElementById('scores-index').addEventListener('click', () => API.loadGameLogs())

    // document.getElementById('reset-page').addEventListener('click', () => Display.reset())

})

// is there a way to extend helper functions to Game class so that there is less clutter ???
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

function wipeCards(){
    document.querySelectorAll(".quizzers").forEach(function(cardNode){
        let child = cardNode.children[0]
        cardNode.removeChild(child)
    })
}

function wipeTemplate(){
    let cont = document.getElementById('game-container')
    cont.removeChild(document.getElementById('quiz-row-1'))
    cont.removeChild(document.getElementById('quiz-row-2'))
    cont.removeChild(document.getElementById('quiz-row-3'))
}

function displayNineCards(arrayOfCards){
    for (let i = 0; i < 9; i++){
        const node = arrayOfCards[i].createNode()
        let cardWrapper = document.getElementById(`card-${i+1}`)
        cardWrapper.appendChild(node)
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