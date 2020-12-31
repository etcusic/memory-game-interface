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
        this.wipePanel()
        this.buildPanel([SidePanel.userName(session), SidePanel.quitGameButton()])
        session.game.play()
        SetListener.quizCards(session.game)
        SetListener.quitGameButton(session)
    }

    static displayFinal (session) {
        Initialize.newPromise(console.log('hello'))
    }

}