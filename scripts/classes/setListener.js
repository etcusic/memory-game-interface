class SetListener {

    static muppetsList () {
        const muppets = document.querySelectorAll('.muppets-list')
        console.log(muppets)
        muppets.forEach(muppet => muppet.addEventListener('click', () => {
            console.log(muppet)
            Initialize.session(muppet.value, muppet.innerText)
        }))
    }

    static homePageButton (session) {
        document.querySelector('.base-page-button').addEventListener('click', () => {
            HomePage.init(session)
        })
    }

}