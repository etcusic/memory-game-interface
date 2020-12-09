class SidePanel {

    static wipeAll () {
        const container = document.getElementById('left-container')
        container.childNodes.forEach( node => container.removeChild(node) )
    }

    static wipeNodes(nodesArray) {
        nodesArray.forEach(node => document.getElementById('left-container').removeChild(node))
    }

    static playGameButton () {
        return `
            <div id="play-game-button-wrapper" class="row">
                <div class="col s12">
                    <button id='apply-options' class='left btn-small purple lighten-2'>PLAY BALL!</button>
                </div>
            </div>
        `
    }

    // add a parameter here for scope methods
    static highScoresButton () {
        return `
            <div id="high-scores-button-wrapper" class="row">
                <div class="col s12">
                    <button id='scores-index' class='left btn-small purple lighten-2'>High Scores</button>
                </div>
            </div>
        `
    }
    
    static basePageButton () {
        return `
            <div id="base-page-button-div-wrapper" class="row three-percent">
                <div class="col s12">
                    <button id='base-page-button' class='left btn-large purple lighten-2'>BACK</button>
                </div>
            </div>
        `
    }

    static quitPlayButton () {
        return `
            <div id="quit-play-button-div-wrapper" class="row">
                <div class="col s12">
                    <button id='quit-play-button' class='left btn-large purple lighten-2'>QUIT GAME</button>
                </div>
            </div>
        `
    }

    // maybe incorporate build() for this
    static basePage () {
        const container = document.getElementById('left-container')
        container.innerHTML += this.playGameButton()
        container.innerHTML += this.highScoresButton()
    }

    static createUl () {
        const ul = document.createElement('ul')
        ul.setAttribute('id', 'side-panel-list')
        ul.setAttribute('class', 'collection z-depth-2')
        return ul
    }

    static clearList () {
        const div = document.getElementById('top-side-panel-div')
        div.replaceChild(this.createUl(), document.getElementById('side-panel-list'))
    }

    static prePlayNodes () {
        return [
            document.getElementById('top-side-panel-div'),
            document.getElementById('play-game-button-wrapper'),
            document.getElementById('high-scores-button-wrapper')
        ]
    }

    static listDiv () {
        return `
            <div id='top-side-panel-div'>
                <ul id='side-panel-list' class='collection z-depth-2'>
                </ul>
            </div>
        `
    }

    // STILL NEED A STOP GAME BUTTON HERE -> RESETS TO BASE PAGE - PUT BUTTON WITH EVENT LISTENER IN INITIALIZER CLASS
    static build (nodesArray) {
        const panel = document.getElementById('left-container')
        nodesArray.forEach( node => panel.innerHTML += node )
    }



    // SCOPE OPTIONS
    // APPLY SCOPE OPTIONS BUTTON

}