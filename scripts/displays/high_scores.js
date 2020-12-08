class HighScores {

    static content () {
        return `
            <div class="row" id="listymaker">
                <div class="col s10 push-s1">
                    <h2 class="center-align">HIGH SCORES:</h2>
                    <ol id="high-scores-list" class="collection">
                    </ol>
                    <div class="center-align">
                        <button id="reset-page" class="btn-small">Reset to Play</button>
                    </div>
                </div>
            </div>
        `
    }

    static appendContainer () {
        const container = htmlNode.div()
        container.setAttribute('id', "high-scores-container")
        container.setAttribute('class', "container purple lighten-2 white-text z-depth-4")
        container.innerHTML += this.content()
        document.getElementById('game-container').appendChild(container)
    }

    static list (gameLogs) {
        const ol = document.getElementById('high-scores-list')
        gameLogs.forEach(element => {
            let node = htmlNode.li()
            node.setAttribute('class', 'collection-item purple lighten-2 white-text')
            node.innerText = `level: ${element.level}, score: ${element.score}, deck_id: ${element.deck_id}, user_id: ${element.user_id}`
            ol.appendChild(node)
        });
    }

    static resetPage(){
        document.getElementById('reset-page').addEventListener('click', () => {
            document.getElementById('game-container').replaceChild(htmlNode.placeHolderDiv(), document.getElementById('high-scores-container'))
        })
    }
    
    static applyList (gameLogs) {
        this.appendContainer()
        this.list(gameLogs)
        this.resetPage()
    }

}