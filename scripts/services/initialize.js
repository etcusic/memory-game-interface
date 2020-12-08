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

    static basePage () {
        API.loadDecks()
        GameBoard.display()
        SidePanel.basePage()
        document.getElementById('apply-options').addEventListener('click', () => GAME.play())
        document.getElementById('scores-index').addEventListener('click', () => API.loadGameLogs())
    }

}