class GameBoard {

    static template () {
        return `
        <div id="nine-cards" class='col s10 push-s1'>
                <div id="quiz-row-1" class="row quiz-row">
                    <div id="card-1" class="quizzers col s4">
                        <div class="quiz-card card center-align z-depth-4"></div>
                    </div>
                    <div id="card-2" class="quizzers col s4">
                        <div class="quiz-card card center-align z-depth-4"></div>
                    </div>
                    <div id="card-3" class="quizzers col s4">
                        <div class="quiz-card card center-align z-depth-4"></div>
                    </div>
                </div>
                <div id="quiz-row-4" class="row quiz-row">
                    <div id="card-4" class="quizzers col s4">
                        <div class="quiz-card card center-align z-depth-4"></div>
                    </div>
                    <div id="card-5" class="quizzers col s4">
                        <div class="quiz-card card center-align z-depth-4"></div>
                    </div>
                    <div id="card-6" class="quizzers col s4">
                        <div class="quiz-card card center-align z-depth-4"></div>
                    </div>
                </div>
                <div id="quiz-row-7" class="row quiz-row">
                    <div id="card-7" class="quizzers col s4">
                        <div class="quiz-card card center-align z-depth-4"></div>
                    </div>
                    <div id="card-8" class="quizzers col s4">
                        <div class="quiz-card card center-align z-depth-4"></div>
                    </div>
                    <div id="card-9" class="quizzers col s4">
                        <div class="quiz-card card center-align z-depth-4"></div>
                    </div>
                </div>
            </div>`
    }

    static cardsWrapper () {
        const div = htmlNode.row()
        div.setAttribute('id', 'cards-wrapper')
        div.innerHTML += this.template()
        return div
        
    }

    static display () {
        const container = document.getElementById('game-container')
        container.appendChild(ScoreBoard.display())
        container.appendChild(this.cardsWrapper())
    }

}