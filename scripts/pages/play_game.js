class PlayGamePage {

    static panelHTML (session) {
        return `
        <div class="panel row three-percent white-text"> 
            <div id="muppet-name" class="center-align three-percent" value=${session.id}>${session.name}</div>
        </div> 
        
        <div class="panel row three-percent">
            <div class="col s12 center-align three-percent">
                <button id="quit-game-button" class="btn-large purple lighten-2">QUIT GAME</button>
            </div>
        </div> `
    }

    // mainHTML is same as previous page
    // these 2 pages should be lumped together along with game over page

    static setListeners (session) {
        ActionListener.quizCards(session.game)
        ActionListener.quitGameButton(session)
    }
    
}