class SidePanel {

    // static buttonWrapper () {
    //     const row = 
    // }

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

}