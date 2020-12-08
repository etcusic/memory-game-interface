class SidePanel {

    static playGameButton () {
        return `
            <div id="play-game-button-wrapper" class="row">
                <div class="col s12">
                    <button id='apply-options' class='left btn-small'>PLAY BALL!</button>
                </div>
            </div>
        `
    }

    // add a parameter here for scope methods
    static highScoresButton () {
        return `
            <div id="high-scores-button-wrapper" class="row">
                <div class="col s12">
                    <button id='scores-index' class='left btn-small'>High Scores</button>
                </div>
            </div>
        `
    }
    
    static basePageButton () {
        return `
            <div id="base-page-button-div-wrapper" class="row">
                <div class="col s12">
                    <button id='base-page-button' class='left btn-large'>BACK</button>
                </div>
            </div>
        `
    }

    static quitPlayButton () {
        return `
            <div id="quit-play-button-div-wrapper" class="row">
                <div class="col s12">
                    <button id='quit-play-button' class='left btn-large'>QUIT GAME</button>
                </div>
            </div>
        `
    }

    static basePage () {
        const container = document.getElementById('left-container')
        container.innerHTML += this.playGameButton()
        container.innerHTML += this.highScoresButton()
    }

    // SCOPE OPTIONS
    // APPLY SCOPE OPTIONS BUTTON

}