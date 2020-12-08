class GameBoard {

    static content () {
        return `
        <div id="nine-cards" class='col s10 push-s1'>
                <div id="quiz-row-1" class="row quiz-row">
                    <div id="card-1" class="quizzers col s4">
                        <div class="quiz-card card center-align z-depth-4"></div>
                    </div>
                    <div id="card-2" class="quizzers col s4">
                        <div data-card="17" class="quiz-card card center-align z-depth-4" value="Atlanta">Falcons</div>
                    </div>
                    <div id="card-3" class="quizzers col s4">
                        <div data-card="14" class="quiz-card card center-align z-depth-4" value="Detroit">Lions</div>
                    </div>
                </div>
                <div id="quiz-row-4" class="row quiz-row">
                    <div id="card-4" class="quizzers col s4">
                        <div data-card="13" class="quiz-card card center-align z-depth-4" value="Minnesota">Vikings</div>
                    </div>
                    <div id="card-5" class="quizzers col s4">
                        <div data-card="12" class="quiz-card card center-align z-depth-4" value="Chicago">Bears</div>
                    </div>
                    <div id="card-6" class="quizzers col s4">
                        <div data-card="22" class="quiz-card card center-align z-depth-4" value="Cincinnati">Bengals</div>
                    </div>
                </div>
                <div id="quiz-row-7" class="row quiz-row">
                    <div id="card-7" class="quizzers col s4">
                        <div data-card="4" class="quiz-card card center-align z-depth-4" value="Green Bay">Packers</div>
                    </div>
                    <div id="card-8" class="quizzers col s4">
                        <div data-card="25" class="quiz-card card center-align z-depth-4" value="Dallas">Cowboys</div>
                    </div>
                    <div id="card-9" class="quizzers col s4">
                        <div data-card="28" class="quiz-card card center-align z-depth-4" value="Arizona">Cardinals</div>
                    </div>
                </div>
            </div>`
    }

    static cardsWrapper () {
        const div = htmlNode.row()
        div.innerHTML += this.content()
        return div
        
    }

    static display () {
        const container = document.getElementById('game-container')
        container.appendChild(ScoreBoard.display())
        container.appendChild(this.cardsWrapper())
    }

}