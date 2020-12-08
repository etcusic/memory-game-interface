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
}