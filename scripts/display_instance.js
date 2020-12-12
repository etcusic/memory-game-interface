class DisplayInstance {
    
    constructor () {
        this.panel = document.getElementById('left-container')
        this.main = document.getElementById('game-container')
    }

    resetPanel() {
        console.log(this)
        // this.panel.children.each( node => node.remove() )
        document.querySelectorAll('.panel').forEach( node => node.remove() )
    }

    resetMain() {
        console.log(this)
        // this.main.children.forEach( node => node.remove() )
        
    }

}