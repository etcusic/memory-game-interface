class Initialize {

    static openingPage () {
        document.querySelectorAll('.base-page-button').forEach(item => {
            item.addEventListener('click', event => {
                document.getElementById('left-container').removeChild(document.getElementById('opening-page-button-div-wrapper'))
                document.getElementById('game-container').removeChild(document.getElementById('landing-page-wrapper'))
                SidePanel.clearList()
                this.basePage()
                
                // initializeMaterialize()
            })
        })
    }

    static gameLogs () {
        GameBoard.wipe()
        API.loadGameLogs()
    }

    static basePage () {
        API.loadDecks()
        GameBoard.display()
        SidePanel.basePage()
        document.getElementById('apply-options').addEventListener('click', () => Initialize.gamePlay())
        document.getElementById('scores-index').addEventListener('click', () => this.gameLogs())
    }

    // STILL NEED A STOP GAME BUTTON IN THE SIDE PANEL -> RESETS TO BASE PAGE
    static gamePlay(){
        SidePanel.wipeNodes(SidePanel.prePlayNodes())
        SidePanel.build([SidePanel.quitPlayButton()])
        // let game = new Game ???
        GAME.play()
    }

}