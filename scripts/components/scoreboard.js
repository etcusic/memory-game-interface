function scoreboard () {
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