document.addEventListener("DOMContentLoaded", () => {
    displayCards(practiceArray)
    lotsOfInputs()
    buttonOne()
    buttonTwo()
    buttonThree()
    buttonFour()
})

const one = document.getElementById('landing-page-wrapper')
const two = document.getElementById('base-page-wrapper')
const three = document.getElementById('create-page-wrapper')
const four = document.getElementById('quiz-page-wrapper')

function buttonOne(){
    const button = document.getElementById('one')
    button.addEventListener('click', function(e){
        one.style.display = "block"
        two.style.display = "none"
        three.style.display = "none"
        four.style.display = "none"
    })
}

function buttonTwo(){
    const button = document.getElementById('two')
    button.addEventListener('click', function(e){
        one.style.display = "none"
        two.style.display = "block"
        three.style.display = "none"
        four.style.display = "none"
    })
}

function buttonThree(){
    const button = document.getElementById('three')
    button.addEventListener('click', function(e){
        one.style.display = "none"
        two.style.display = "none"
        three.style.display = "block"
        four.style.display = "none"
    })
}

function buttonFour(){
    const button = document.getElementById('four')
    button.addEventListener('click', function(e){
        one.style.display = "none"
        two.style.display = "none"
        three.style.display = "none"
        four.style.display = "block"
    })
}

