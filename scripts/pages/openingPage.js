import { Page } from './page.js'
import { muppetList } from '../components/muppetList.js'
import { kermitWelcome } from '../components/kermitWelcome.js'


export class OpeningPage extends Page {

    static init() {
        this.buildPage(this.initialView())
        API.loadMuppets()
    }

    static initialView () {
        return { 
            panel: [muppetList()],
            main: [kermitWelcome()] 
        }
    }

    static appendMuppets (muppetData) {
        muppetData.forEach( muppet => document.getElementById('muppet-ul').innerHTML += muppetLi(muppet))
    }

    static beaker (session) {
        this.wipeAll()
        this.buildPage(this.beakerView(session)) 
        SetListener.homePageButton(session) 
    }

    static beakerView (session) {
        return {
            panel: [userName(session)],
            main: [beakerDisplay()]
        }
    }
}
