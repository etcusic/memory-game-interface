class HighScoresPage {

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
        </div> `
    }

    static mainHTML () {
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
        console.log(gameLog)
        // this needs work - better display (maybe a table) and better data displayed
        return `
        <tr>
            <td>${index + 1}</td>
            <td>${gameLog.user}</td>
            <td>${gameLog.deck}</td>
            <td>${gameLog.score}</td>
        </tr>
        `
    }

    static appendHighScores (gameLogs) {
        console.log(gameLogs)
        gameLogs.forEach( (log, index) => document.getElementById('high-scores-table').innerHTML += HighScoresPage.highScoreLi(index, log) )
    }
    
    static setListeners (session) {
        ActionListener.basePageButton(session)
    }

}