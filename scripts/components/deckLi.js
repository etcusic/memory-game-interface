export function deckLi (deck) {
    return ` <li value=${deck.id} class="collection-item purple lighten-2 white-text decks-list ">${deck.title}</li> `
}