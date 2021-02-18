class SidePanel {

    // static muppetList () {
    //     return `
    //     <div class="panel row three-percent">
    //         <div class="three-percent col s10 push-s1">
    //             <ul id="muppet-ul" class="collection z-depth-2">
    //             </ul>
    //         </div>
    //     </div> `
    // }

    static muppetLi (muppet) {
        return `<li value=${muppet.id} class="muppets-list collection-item purple lighten-2 white-text">${muppet.name}</li>`
    } 

    static userName (session) {
        return `
        <div class="panel row three-percent"> 
            <div id="muppet-name" class="center-align three-percent" value=${session.id}>${session.name}</div>
        </div> `
    }

    static decksUl () {
        return `
        <div class="panel row">
            <div class="col s10 push-s1">
                <ul id="decks-ul" class="collection z-depth-2"></ul>
            </div>
        </div> `
    }

    static deckLi (deck) {
        return ` <li value=${deck.id} class="collection-item purple lighten-2 white-text decks-list ">${deck.title}</li> `
    }

    static playGameButton () {
        return `
        <div class="panel row">
            <div class="col s12 center-align">
                <button id="play-game-button" class="btn-large purple lighten-2">START GAME</button>
            </div>
        </div>`
    }

    static backButton () {
        return `
        <div class="panel row">
            <div class="col s12 center-align">
                <button class="base-page-button btn-large purple lighten-2">GO BACK</button>
            </div>
        </div> `
    }

    static quitGameButton () {
        return `
        <div class="panel row three-percent">
            <div class="col s12 center-align three-percent">
                <button id="quit-game-button" class="btn-large purple lighten-2">QUIT GAME</button>
            </div>
        </div> `
    }

}