class Frame {
  constructor (rolls = []) {
    this.rolls = rolls
  }

  addRoll (roll) {
      this.rolls.push(roll);
  }

  secondRoll (roll) {
    if (this.strike() === false) {
      this.addRoll(roll);
    }
  }
  score () {
    return this.rolls.reduce((a, b) => a + b, 0);
  }
  strike () {
    if (this.rolls[0] === 10) {
      return true;
    } else { 
      return false;
    }
  }
  spare () {
    if ((this.strike() === false) && ((this.rolls[0] + this.rolls[1]) === 10)) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Frame;