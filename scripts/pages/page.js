export class Page {

    static wipePanel () {
        document.querySelectorAll('.panel').forEach( node => node.remove() )
    }

    static wipeMain () {
        document.querySelectorAll('.main').forEach( node => node.remove() )
    }

    static wipeAll () {
        this.wipePanel()
        this.wipeMain()
    }

    static buildPanel (nodesArray) {
        nodesArray.forEach( node => document.getElementById('left-container').innerHTML += node)
    }

    static buildMain (nodesArray) {
        nodesArray.forEach( node => document.getElementById('game-container').innerHTML += node)
    }

    static buildPage (nodesObject) {
        this.buildPanel(nodesObject.panel)
        this.buildMain(nodesObject.main)
    }

}