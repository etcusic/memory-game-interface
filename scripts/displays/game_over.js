class GameOver {
    // create a new gameLog with gameOver and then delete it when they press the button to move on

    // should this be somewhere else ??
    static resetPage () {
        document.getElementById('game-container').replaceChild(NODE.placeHolder, document.getElementById('game-over-container'))
    }

    static resetButton () {
        const button = NODE.buttonSmall
        button.innerText = "RESET"
        button.addEventListener('click', () => this.resetPage())
        return button
    }

    static yourScore (score) {
        const yourScore = NODE.centeredDiv
        yourScore.innerText = `Your final score was: ${score}`
        return yourScore
    }

    static congrats () {
        const congrats = htmlNode.centeredDiv()
        congrats.innerText = "CONGRATULATIONS!!!" // add user name
        return congrats
    }

    // this is a perfect example of returning stringed HTML - button probably needs to remain separate due to event listener, though
    static setDisplay (score) {
        const container = NODE.container
        container.setAttribute('id', 'game-over-container')
        container.appendChild(this.congrats())
        container.appendChild(this.yourScore(score))
        container.appendChild(this.resetButton())
        return container
    }

}
