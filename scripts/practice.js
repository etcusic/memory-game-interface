

function appendHomeCard(htmlCard){
    const main = document.getElementsByTagName('main')[0]
    console.log(main)
    console.log(htmlCard)
    main.append(htmlCard)
}

function appendCards(htmlCard){
    const main = document.getElementsByTagName('main')
    main.appendChild(htmlCard)
}

function homeListener(){
    const homeButton = document.getElementById('toggle')
    homeButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("check 1 2")
    })
}

document.addEventListener("DOMContentLoaded", () => {
    homeListener()

  })
  