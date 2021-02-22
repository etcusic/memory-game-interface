import { Page } from './page.js'
import { API } from '../services/API.js' 
import { userName } from '../components/userName.js'
import { scoresTable } from '../components/scoresTable.js'
import { highScoreLi } from '../components/highScoreLi.js'

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