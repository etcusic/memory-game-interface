import { Page } from './page.js'

export class GameLogsPage extends Page {

    static init(session) {
        this.wipeAll()
        this.buildPage(this.initialView(session))
        API.loadGameLogs(session)
    }

    static initialView (session) {
        return {
            panel: [userName(session)],
            main: [scoresTable()]
        }
    }

    static appendHighScores (gameLogs) {
        gameLogs.forEach( (log, index) => document.getElementById('high-scores-table').innerHTML += highScoreLi(index, log) )
    }

}