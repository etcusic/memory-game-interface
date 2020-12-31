class Main {

    static kermitWelcome () {
        return `
        <div class="main row three-percent">
            <div class="col s6 push-s3 home-cards">
                <div class="card">
                    <div class="card-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR920N-gdDwfnL_tP1SePeQnooTZ7fec0CkWQ&amp;usqp=CAU">
                    </div>
                    <div class="card-content center-align light-blue darken-4 white-text">
                        <div>WELCOME TO THE QUIZZLATOR!</div>
                        <div>SELECT YOUR MUPPET AVATAR</div>
                    </div>
                </div>
            </div>
        </div> `
    }

    static beakerDisplay () {
        return `
        <div class="main row three-percent">
            <div class="col s6 push-s3 home-cards">
                <div class="card">
                    <div class="card-image">
                        <img src="data:image/jpeg;base64,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">
                    </div>
                    <div class="card-content center-align light-blue lighten-2">
                        <div>PRESS THE BUTTON TO BEGIN!</div>
                        <div class="center-align three-percent">
                            <button class="base-page-button btn-floating btn-large red darken-3 waves-effect"><i class="material-icons"></i></button>
                        </div> 
                    </div>
                </div>
            </div>
        </div> `
    }

    static optionsCard () {
        return `
        <div class="main row three-percent">
            <div class="col s6 push-s3 home-cards">
                <div class="card">
                    <div class="card-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnjavk7kvnFTEYtB93BnxIJ3mVu4K6TpfHA&usqp=CAU">
                    </div>
                    <div class="card-content center-align light-blue lighten-2">
                        <div class="row">
                            <div class="three percent col s8 center-align muppet-name">OR SEE HIGH SCORES:</div>
                            <div class="three-percent">
                                <button id="scores-index-button" class="left btn-small purple lighten-2">HIGH SCORES</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div> `
    }

    static openingBanner () {
        return `
        <div class="main row three-percent" id="score-board">
            <div class="col s8 push-s2  light-blue lighten-2 z-depth-4 center-align">
                <div class="row scoreboard-words">
                    SELECT A DECK TO PLAY
                </div>
            </div>
        </div>`
    }

    static scoresTable () {
        return `
        <div id="high-scores-container" class="main container purple lighten-2 white-text z-depth-4 three-percent">
            <div class="row" id="listymaker">
                <div class="col s10 push-s1">
                    <h2 class="center-align">HIGH SCORES:</h2>
                    <table>
                            <thead>
                              <tr>
                                  <th>#</th>
                                  <th>Name</th>
                                  <th>Deck</th>
                                  <th>Score</th>
                              </tr>
                            </thead>
                    
                            <tbody id="high-scores-table">             
                                               
                            </tbody>
                          </table>
                    <div class="row three-percent">
                        <div class="col s12 center-align">
                            <button id="reset-page" class="base-page-button btn-large light-blue lighten-2">Reset to Play</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> `
    }

    static highScoreLi (index, gameLog) {
        return `
        <tr>
            <td>${index + 1}</td>
            <td>${gameLog.user}</td>
            <td>${gameLog.deck}</td>
            <td>${gameLog.score}</td>
        </tr>
        `
    }

    static scoreboard () {
        return `
        <div class="main row three-percent scoreboard">
            <div class="col s8 push-s2">
                <div id="scoreboard-timer" class="score-board row z-depth-4">
                    <div class="col s12">
                        <div class="right">
                            <div id="timer">TIMER:</div> 
                            <div id="timer-value" class="number center-align">0</div>
                        </div>
                        <div class="left">
                            <div id="score">SCORE:</div> 
                            <div id="score-value" class="number center-align">0</div> 
                        </div>
                        <div id="term" class="center-align">
                            <div id="term-value" class="scoreboard-words"></div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }

    static cardDisplay () {
        return `
        <div class="main row" id="cards-wrapper">
            <div id="nine-cards" class="col s10 push-s1">
                <div id="quiz-row-1" class="row quiz-row">
                    <div id="card-div-1" class="quizzers col s4"></div>
                    <div id="card-div-2" class="quizzers col s4"></div>
                    <div id="card-div-3" class="quizzers col s4"></div>
                </div>
                <div id="quiz-row-2" class="row quiz-row">
                    <div id="card-div-4" class="quizzers col s4"></div>
                    <div id="card-div-0" class="quizzers col s4"></div>
                    <div id="card-div-5" class="quizzers col s4"></div>
                </div>
                <div id="quiz-row-3" class="row quiz-row">
                    <div id="card-div-6" class="quizzers col s4"></div>
                    <div id="card-div-7" class="quizzers col s4"></div>
                    <div id="card-div-8" class="quizzers col s4"></div>
                </div>
            </div>
        </div> `
    }

}