class Initialize {

    static opening () {
        document.querySelectorAll('.base-page-button').forEach(item => {
            item.addEventListener('click', event => {
                let landing_page = document.getElementById('landing-page-wrapper')
                let main_page = document.getElementById('main')
                landing_page.style.display = 'none'
                main_page.style.display = 'block'
                // initializeMaterialize()
            })
        })
    }

    // static gameLoad () {

    // }

    static gameLogIndex (gameLogs) {
        // console.log(gameLogs[0])
        // gameLogs.map(log => log.level) //new GameLog(log.level, log.score, log.deck_id, log.user_id))
        // console.log(gameLogs[0].score)
        Display.highScores(gameLogs)
    }

}