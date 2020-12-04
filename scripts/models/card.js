class Card {
    constructor(hash){
        this.sideA = hash.side_a
        this.sideB = hash.side_b
        console.log(this)
    }

    // add a param for if someone wants to decide on side A or side B
    display(){
        return `
            <div class="col s4">
                <div data-card='${this.id}' class="quiz-card card center-align">${this.sideB}</div>
            </div>
        `
    }
}