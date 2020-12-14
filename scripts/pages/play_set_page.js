class PlaySetPage {

    static initialView (session) {
        return {
            panel: [this.panelHTML(session)],
            main: [this.mainHTML()]
        }
    }

    static panelHTML (session) {
        return `
        <div class="panel row three-percent"> 
            <div id="muppet-name" class="center-align three-percent" value=${session.id}>${session.name}</div>
        </div>  
        
        <div class="panel row">
            <div class="col s12 center-align">
                <button id="play-game-button" class="btn-large purple lighten-2">START GAME</button>
            </div>
        </div> 

        <div class="panel row">
            <div class="col s12 center-align">
                <button class="base-page-button btn-large purple lighten-2">GO BACK</button>
            </div>
        </div> `
    }

    // need deck title
    static mainHTML () {
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
        </div>

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

    static setListeners (session) {
        ActionListener.basePageButton(session)
        ActionListener.playGameButton(session)
    }
    
}