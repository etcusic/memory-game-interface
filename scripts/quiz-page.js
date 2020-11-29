const practiceArray = [
    "Don't forget to set a 35 character limit",
    "card2",
    "card3",
    "card4",
    "card5",
    "card6",
    "card7",
    "card8",
    "card9",
    "card10",
    "card11",
    "card12",
    "card13",
    "card14",
    "card15",
    "card16",
    "card17",
    "card18",
    "card19",
    "card20"
]

const cardWrapper = function(card){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'col s3')
    newDiv.appendChild(card)
    return newDiv
}

const quizCard = function(content){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'card quiz-cards')
    newDiv.innerText = content
    return newDiv
}

function displayCards(array){
    const mainDiv = document.getElementById('top-row')
    array.forEach(function(e){
        mainDiv.appendChild(cardWrapper(quizCard(e)))
    })
}

