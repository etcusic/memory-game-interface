// can I create a constant 'rowDiv' to reuse for a lot of these variables???

// create the ability to press tab and make a new input rather than propogate 20

const kermitWindowImg = function(){
    const img = document.createElement('img')
    img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhoWqE2Ld_pZos1i3W31M8kamLtjbV75XWEg&usqp=CAU')
    return img
}

const kermitWindowDiv = function(){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'card-image')
    newDiv.appendChild(kermitWindowImg())
    return newDiv
}

const kermitDestruction = function(){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'card-content center-align baby-blue')
    newDiv.innerText = "No rush - Kermit can plot your destruction while you work"
    return newDiv
}

const windowKermitCard = function(){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'card')
    newDiv.appendChild(kermitWindowDiv())
    newDiv.appendChild(kermitDestruction())
    return newDiv
}

const windowKermit = function(){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'col s3 fiver')
    newDiv.appendChild(windowKermitCard())
    return newDiv
}

const textInput = function(){
    const inputTag = document.createElement('input')
    inputTag.setAttribute('type', 'text')
    return inputTag
}

const titleLabel = function(){
    const labelTag = document.createElement('label')
    labelTag.innerText = "Title"
    return labelTag
}

const labelA = function(){
    const labelTag = document.createElement('label')
    labelTag.innerText = "side A"
    return labelTag
}

const labelB = function(){
    const labelTag = document.createElement('label')
    labelTag.innerText = "side B"
    return labelTag
}

const inputADiv = function(){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'input-field col s6')
    newDiv.appendChild(textInput())
    newDiv.appendChild(labelA())
    return newDiv
}

const inputBDiv = function(){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'input-field col s6')
    newDiv.appendChild(textInput())
    newDiv.appendChild(labelB())
    return newDiv
}

const divWrapper = function(){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'row card-input')
    newDiv.appendChild(inputADiv())
    newDiv.appendChild(inputBDiv())
    return newDiv
}

const inputTitle = function(){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'input-field col s8 fiver')
    let input = textInput()
    input.setAttribute('id', 'title')
    newDiv.appendChild(input)
    newDiv.appendChild(titleLabel())
    return newDiv
}

const titleWrapper = function(){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'deck-title')
    newDiv.setAttribute('class', 'row')
    newDiv.appendChild(inputTitle())
    return newDiv
}

const buttonTag = function(){
    const button = document.createElement('button')
    button.setAttribute('type', 'submit')
    button.setAttribute('class', 'btn-small waves-effect light-blue darken-4')
    button.innerText = 'Submit'
    return button
}

const buttonDiv = function(){
    const newDiv = document.createElement('div')
    newDiv.appendChild(buttonTag())
    return newDiv
}

function lotsOfInputs(div){
    for(let i = 0; i < 20; i++){
        div.appendChild(divWrapper())
    }
}

const formTag = function(){
    const form = document.createElement('form')
    form.setAttribute('id', 'deck-creator')
    form.appendChild(titleWrapper())
    // form.appendChild(divWrapper())
    lotsOfInputs(form)
    form.appendChild(buttonDiv())
    return form
}

const formWrapper = function(){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'col s7 push-s1 fiver baby-blue')
    newDiv.appendChild(formTag())
    return newDiv
}

function setCreatorPage(){
    const mainDiv = document.getElementById('top-row')
    mainDiv.appendChild(windowKermit())
    mainDiv.appendChild(formWrapper())
    console.log('seriously?')
}

// DOM Loader
document.addEventListener("DOMContentLoaded", () => {
    setCreatorPage()
})
