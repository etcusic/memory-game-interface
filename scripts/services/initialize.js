class Initialize {

    static opening () {
        document.querySelectorAll('.base-page-button').forEach(item => {
            item.addEventListener('click', event => {
                let landing_page = document.getElementById('landing-page-wrapper')
                let main_page = document.getElementById('main')
                landing_page.style.display = 'none'
                main_page.style.display = 'block'
                // initializeMaterialize()
            })
        })
        console.log('working')
    }

    // static gameLoad () {

    // }

}