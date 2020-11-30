document.addEventListener("DOMContentLoaded", () => {
    // displayCards(practiceArray)  //quiz-page
    // setCreatorPage()     // create-page
    pressButton()
})

function hideAndSeek(){
    const button = document.getElementById('hide-n-seek')
    let landing = document.getElementById('landing-page-wrapper')
    let base = document.getElementById('base-page-wrapper')
    if (landing.style.display === "none"){
        base.style.display = "none"
        landing.style.display = "block"
    } else {
        base.style.display = "block"
        landing.style.display = "none"
    }
    
}

function pressButton(){
    const button = document.getElementById('hide-n-seek')
    button.addEventListener('click', function(e){
        hideAndSeek()
    })
}