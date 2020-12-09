class ScoreBoard {

    static wipe () {
        // console.log(document.getElementById('score-board'))
        // document.getElementById('game-container').removeChild(document.getElementById('score-board'))
        const container = document.getElementById('game-container')
        container.childNodes.forEach( node => container.removeChild(node) )
    }

    static content () {
        return `
            <div class="col s8 push-s2">
                <div id='score-term-timer' class="score-board row z-depth-4">
                    <div class="col s12">
                        <div class="right">
                            <div id='timer'>TIMER:</div> 
                            <div id='timer-value' class="number center-align">0</div>
                        </div>
                        <div class="left">
                            <div id='score'>SCORE:</div> 
                            <div id='score-value' class="number center-align">0</div> 
                        </div>
                        <div id='term' class="center-align">
                            <div id='term-value'>SELECT SET</div>    
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    static display () {
        const div = htmlNode.row()
        div.setAttribute('id', 'score-board')
        div.innerHTML += this.content()
        return div
    }

}