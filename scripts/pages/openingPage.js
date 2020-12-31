class OpeningPage extends Page {

    static init() {
        this.buildPage(this.initialView())
        API.loadMuppets()
    }

    static initialView () {
        return { 
            panel: [SidePanel.muppetList()], 
            main: [Main.kermitWelcome()] 
        }
    }

    static appendMuppets (muppetData) {
        muppetData.forEach( muppet => document.getElementById('muppet-ul').innerHTML += SidePanel.muppetLi(muppet))
    }

    static beaker (session) {
        this.wipeAll()
        this.buildPage(this.beakerView(session)) 
        SetListener.homePageButton(session) 
    }

    static beakerView (session) {
        return {
            panel: [SidePanel.userName(session)],
            main: [Main.beakerDisplay()]
        }
    }
}