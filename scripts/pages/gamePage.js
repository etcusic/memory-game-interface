export class GamePage extends Page {

    static init (session) {
        this.wipeAll()  // wipeAll and bulidPage are in the Page parent class
        this.buildPage(this.initialView(session))
        document.getElementById('term-value').innerText = session.game.deck.title
        document.querySelectorAll('.quizzers').forEach( div => div.appendChild(Card.blank()) )
        SetListener.playGameButton(session) 
        SetListener.homePageButton(session)
    }

    static initialView (session) {
        return {
            panel: [userName(session), playGameButton(), backButton()],
            main: [scoreboard(), cardDisplay()]
        }
    }

    static play (session) {
        this.wipePanel()
        this.buildPanel([userName(session), quitGameButton()])
        session.game.play()
        SetListener.quizCards(session.game)
        SetListener.quitGameButton(session)
    }

    static displayFinal (session, gameLog) {
        this.wipeAll()
        this.buildPage(this.finalDisplay(session))
        SetListener.submitScoreButton(session, gameLog)
    }

    static finalDisplay(session){
        return {
            panel: [userName(session)],
            main: [gameOverDisplay(session)]
        }
    }

}