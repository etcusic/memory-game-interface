class GamePage extends Page {

    static init (session) {
        this.wipeAll()
        this.buildPage(this.initialView(session))
        document.getElementById('term-value').innerText = session.game.deck.title
        document.querySelectorAll('.quizzers').forEach( div => div.appendChild(Card.blank()) )
        SetListener.playGameButton(session) 
        SetListener.homePageButton(session)
    }

    static initialView (session) {
        return {
            panel: [SidePanel.userName(session), SidePanel.playGameButton(), SidePanel.backButton()],
            main: [Main.scoreboard(), Main.cardDisplay()]
        }
    }

    static play (session) {
        Initialize.newPromise(console.log('hello'))
    }

    static displayFinal (session) {
        Initialize.newPromise(console.log('hello'))
    }

}