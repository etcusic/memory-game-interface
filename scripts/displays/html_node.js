class htmlNode {
    static row () {
        const row = document.createElement('div')
        row.setAttribute('class', 'row')
        return row
    }

    static div () {
        return document.createElement('div')
    }

    static ol () {
        return document.createElement('ol')
    } 

    static ul () {
        return document.createElement('ul')
    } 

    static li () {
        return document.createElement('li')
    } 

    static placeHolderDiv () {
        const div = document.createElement('div')
        div.setAttribute('id', 'place-holder')
        return div
    }

    static container () {
        const div = document.createElement('div')
        div.setAttribute('class', 'container')
        return div
    }

    static centeredDiv () {
        const div = document.createElement('div')
        div.setAttribute('class', 'center-align')
        return div
    }

    static buttonSmall () {
        const button = document.createElement('button')
        button.setAttribute('class', 'btn-small')
        return button
    }

    static buttonLarge () {
        const button = document.createElement('button')
        button.setAttribute('class', 'btn-large')
        return button
    }
}