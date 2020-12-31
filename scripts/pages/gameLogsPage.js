class GameLogsPage extends Page {

    static init(session) {
        Initialize.newPromise(this.wipeAll())
        .then(this.buildPage(this.initialView(session)))

    }

    static initialView (session) {
        return {
            panel: [],
            main: []
        }
    }

}