class GameLogsPage extends Page {

    static init(session) {
        Initialize.newPromise(this.wipeAll())
        .then(this.buildPage(this.initialView(session)))
        .then(API.loadGameLogs(session))
    }

    static initialView (session) {
        return {
            panel: [SidePanel.userName(session)],
            main: [Main.scoresTable()]
        }
    }

    static appendHighScores (gameLogs) {
        gameLogs.forEach( (log, index) => document.getElementById('high-scores-table').innerHTML += HighScoresPage.highScoreLi(index, log) )
    }

}