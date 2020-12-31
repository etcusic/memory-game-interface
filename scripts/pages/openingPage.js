class OpeningPage extends Page {

    static init() {
        this.buildPage({
            panel: [SidePanel.muppetList()],
            main: [Main.kermitWelcome()]
        })       
        API.loadMuppets()
    }

}