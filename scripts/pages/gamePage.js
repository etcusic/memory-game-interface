class GamePage extends Page {

    static init (session) {
        Initialize.newPromise(this.wipeAll())
        .then(console.log(session))
    }

    static play (session) {
        Initialize.newPromise()
    }

    static displayFinal (session) {
        Initialize.newPromise()
    }

}