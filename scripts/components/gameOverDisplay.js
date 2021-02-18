function gameOverDisplay (session) {
    return `            
    <div class="main row" id="game-over-container">
        <div class="col s6 push-s3 home-cards">
            <div id="game-over-content" class="card purple lighten-2 white-text">
                <div class="card-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVGfaJxT0bgNXFEcqFuh6LQ7gXdDaJoyIb0g&amp;usqp=CAU">
                </div>
                <h4 class="center-align">Your score was: ${session.game.score}!</h4>
                <div class="card-action center-align">
                    <button id="submit-score-button" class="btn-large light-blue lighten-2">Submit Score</button>
                </div>
            </div>
        </div>
    </div> `
}