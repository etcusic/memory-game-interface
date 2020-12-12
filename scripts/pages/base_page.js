class BasePage {

    static initialView (session) {
        return {
            panel: [this.panelHTML(session)],
            main: [this.mainHTML()]
        }
    }

    static panelHTML (session) {
        return `
        <div class="panel row three-percent white-text"> 
            <div id="muppet-name" class="center-align three-percent" value=${session.id}>${session.name}</div>
        </div> 

        <div class="panel row">
            <div class="col s10 push-s1">
                <ul id="decks-ul" class="collection z-depth-2"></ul>
            </div>
        </div> `
    }

    static mainHTML () {
        return `
        <div class="main row three-percent" id="score-board">
            <div class="col s8 push-s2  light-blue lighten-2 z-depth-4 center-align">
                <div class="row scoreboard-words">
                    SELECT A DECK TO PLAY
                </div>
            </div>
        </div>    

        <div class="main row three-percent">
            <div class="col s6 push-s3 home-cards">
                <div class="card">
                    <div class="card-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnjavk7kvnFTEYtB93BnxIJ3mVu4K6TpfHA&usqp=CAU">
                    </div>
                    <div class="card-content center-align light-blue lighten-2">
                        <div class="row">
                            <div class="three percent col s8 center-align white-text muppet-name">OR SEE HIGH SCORES:</div>
                            <div class="three-percent">
                                <button id="scores-index-button" class="left btn-small purple lighten-2">HIGH SCORES</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div> `
    }

    static deckLi (deck) {
        return ` <li value=${deck.id} class="collection-item purple lighten-2 white-text decks-list ">${deck.title}</li> `
    }

    static appendDecks (deckInfo) {
        deckInfo.forEach( deck => document.getElementById('decks-ul').innerHTML += BasePage.deckLi(deck) )
    }
    
    static setListeners (session) {
        ActionListener.decksList(session)
        ActionListener.scoresIndexButton(session)
    }
    
}