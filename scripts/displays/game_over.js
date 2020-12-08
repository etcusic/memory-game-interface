class GameOver {
    // create a new gameLog with gameOver and then delete it when they press the button to move on

    // should this be somewhere else ??
    static resetPageButton () {
        const button = document.getElementById('reset-page')
        button.addEventListener('click', function(){
            document.getElementById('game-container').replaceChild(NODE.placeHolder, document.getElementById('game-over-container'))
        })
    }

    // static resetButton () {
    //     const button = NODE.buttonSmall
    //     button.innerText = "RESET"
    //     button.addEventListener('click', () => this.resetPage())
    //     return button
    // }

    // static yourScore (score) {
    //     const yourScore = NODE.centeredDiv
    //     yourScore.innerText = `Your final score was: ${score}`
    //     return yourScore
    // }

    // static congrats () {
    //     const congrats = htmlNode.centeredDiv()
    //     congrats.innerText = "CONGRATULATIONS!!!" // add user name
    //     return congrats
    // }

    static content (score) {
        return `

                <div class="col s6 push-s3 home-cards">
                    <div id="game-over-content" class="card purple lighten-2 white-text">
                        <div class="card-image">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVGfaJxT0bgNXFEcqFuh6LQ7gXdDaJoyIb0g&usqp=CAU">
                        </div>
                        <h4 class="center-align">Your score was: ${score}!</h4>
                        <div class="card-action center-align">
                            <button id='reset-page' class='btn-small'>Submit Score</button>
                        </div>
                    </div>
                </div>

        `
    }

    // this is a perfect example of returning stringed HTML - button probably needs to remain separate due to event listener, though
    static setDisplay (score) {
        const container = NODE.rowDiv
        container.setAttribute('id', 'game-over-container')
        container.innerHTML += this.content(score)
        console.log(container)
        return container
        // const container = NODE.container
        // container.setAttribute('id', 'game-over-container')
        // container.appendChild(this.congrats())
        // container.appendChild(this.yourScore(score))
        // container.appendChild(this.resetButton())
        // return container
    }

}
