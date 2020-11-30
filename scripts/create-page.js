// can I create a constant 'rowDiv' to reuse for a lot of these variables???

// create the ability to press tab and make a new input rather than propogate 20

const textInput = function(){
    const inputTag = document.createElement('input')
    inputTag.setAttribute('type', 'text')
    return inputTag
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

const inputWrapper = function(){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'row card-input')
    newDiv.appendChild(inputADiv())
    newDiv.appendChild(inputBDiv())
    return newDiv
}


function lotsOfInputs(){
    const inputBlock = document.getElementById('input-block')
    for(let i = 0; i < 3; i++){
        inputBlock.appendChild(inputWrapper())
    }
}

