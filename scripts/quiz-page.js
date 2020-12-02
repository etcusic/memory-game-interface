const practiceArray = [
    "Set a 35 char limit - big raccoons",
    "15 characters for title",
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

// new idea => set up the game so that there are 8 options for each question - question is in the middle with 8 surrounding it

function startGame(){
    const startButton = document.getElementById('start-button')
    startButton.addEventListener('click', function(e){
        let quizTerm = document.getElementById('quiz-term')
        quizTerm.style.fontSize = "55px"
        quizTerm.innerText = practiceArray[0]
        displayCards(practiceArray)
    })
}

function checkAnswer(card, quizTerm, i){
    if (card.innerText === quizTerm.innerText){
        card.style.background = "#32CD32"
        quizTerm.innerText = practiceArray[i + 1]
    } else {
        card.style.background = 'red'
        // pause 1-2 seconds on wrong answer
        // card.style.background = '#FF9'
    }
}

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
    newDiv.addEventListener('click', function(e){
        checkAnswer(newDiv, document.getElementById('quiz-term'), practiceArray.indexOf(document.getElementById('quiz-term').innerText))
    })
    return newDiv
}

function displayCards(array){
    const divWrapper = document.getElementById('quiz-page-wrapper')
    array.forEach(function(e){
        divWrapper.appendChild(cardWrapper(quizCard(e)))
    })
    //comment these out to implement with rest of site
    document.getElementById('game-header').style.display = 'block'
    divWrapper.style.display = 'block'
}

function endGame(){
    
}