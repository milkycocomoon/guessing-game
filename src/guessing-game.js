class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.result;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() { return this.result = Math.round((this.min + this.max)/2); }

    lower() { this.max = this.result; }

    greater() { this.min = this.result; }
}

module.exports = GuessingGame;
