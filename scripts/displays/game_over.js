class GameOver {

    static wipe () {
        document.getElementById('game-container').removeChild(document.getElementById('score-board'))
        document.getElementById('game-container').removeChild(document.getElementById('game-over-container'))
    }

    static resetPageButton (gameLog) {
        const button = document.getElementById('reset-page')
        button.addEventListener('click', function(){
            API.uploadGameLog(gameLog)
            GameOver.wipe()
            GameBoard.display()
        })
    }

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

    static setDisplay (score) {
        const container = htmlNode.row()
        container.setAttribute('id', 'game-over-container')
        container.innerHTML += this.content(score)
        return container
    }

}
