class OpeningPage extends Page {

    static init() {
        Initialize.newPromise(this.buildPage(this.initialView()))    
        .then(API.loadMuppets())
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
        Initialize.newPromise(this.wipeAll())
        .then( this.buildPage(this.beakerView(session)) )
        .then( SetListener.homePageButton(session) )
    }

    static beakerView (session) {
        return {
            panel: [SidePanel.userName(session)],
            main: [Main.beakerDisplay()]
        }
    }
}