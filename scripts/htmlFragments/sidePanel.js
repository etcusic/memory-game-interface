class SidePanel {

    static muppetList () {
        return `
        <div class="panel row three-percent">
            <div class="three-percent col s10 push-s1">
                <ul id="muppet-ul" class="collection z-depth-2">
                </ul>
            </div>
        </div> `
    }

    static muppetLi (muppet) {
        return `<li value=${muppet.id} class="muppets-list collection-item purple lighten-2 white-text">${muppet.name}</li>`
    } 

    static userName (session) {
        return `
        <div class="panel row three-percent"> 
            <div id="muppet-name" class="center-align three-percent" value=${session.id}>${session.name}</div>
        </div> `
    }

}