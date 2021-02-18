function scoresTable () {
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