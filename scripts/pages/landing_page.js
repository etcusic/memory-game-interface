class LandingPage {

    static initialView () {
        return {
            panel: [this.panelHTML()],
            main: [this.mainHTML()]
        }
    }

    static panelHTML () {
        return `
        <div class="panel row three-percent">
            <div class="three-percent col s10 push-s1">
                <ul id="muppet-ul" class="collection z-depth-2">
                </ul>
            </div>
        </div> `
    }

    static mainHTML () {
        return `
        <div class="main row three-percent">
            <div class="col s6 push-s3 home-cards">
                <div class="card">
                    <div class="card-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR920N-gdDwfnL_tP1SePeQnooTZ7fec0CkWQ&amp;usqp=CAU">
                    </div>
                    <div class="card-content center-align light-blue darken-4 white-text">
                        <div>WELCOME TO THE QUIZZLATOR!</div>
                        <div>SELECT YOUR MUPPET AVATAR</div>
                    </div>
                </div>
            </div>
        </div> `
    }

    static muppetLi (muppet) {
        return `<li value=${muppet.id} class="muppets-list collection-item purple lighten-2 white-text">${muppet.name}</li>`
    } 

    static appendMuppets (muppetData) {
        muppetData.forEach( muppet => document.getElementById('muppet-ul').innerHTML += LandingPage.muppetLi(muppet))
    }

    static setListeners () {
        ActionListener.muppetsList()
    }
    
}