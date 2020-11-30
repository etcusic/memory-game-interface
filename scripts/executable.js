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
    document.querySelectorAll('.landing-page-button').forEach(item => {
        item.addEventListener('click', event => {
            one.style.display = "block"
            two.style.display = "none"
            three.style.display = "none"
            four.style.display = "none"
        })
    })
}

function buttonTwo(){
    document.querySelectorAll('.base-page-button').forEach(item => {
        item.addEventListener('click', event => {
            one.style.display = "none"
            two.style.display = "block"
            three.style.display = "none"
            four.style.display = "none"
        })
    })
}

function buttonThree(){
    document.querySelectorAll('.create-page-button').forEach(item => {
        item.addEventListener('click', event => {
            one.style.display = "none"
            two.style.display = "none"
            three.style.display = "block"
            four.style.display = "none"
        })
    })
}

function buttonFour(){
    document.querySelectorAll('.quiz-page-button').forEach(item => {
        item.addEventListener('click', event => {
            one.style.display = "none"
            two.style.display = "none"
            three.style.display = "none"
            four.style.display = "block"
        })
    })
}
