const Frame = require('./frame.js');

class Game {
  constructor (frames = []) {
    this.frames = frames;
  }

  addFrame(frame) {
    this.frames.push(frame.rolls);
  }

  playFirstTen () {
    for (let i = 1 ; i < 10 ; i++) {
      let frame = new Frame;

      this.addRoll(frame);
      this.secondRoll(frame);
      this.frames.push(frame);
      this.frames.insertBonus();
    }
  }
  insertBonus () {
    let previousFrame = this.frames[-2]
    if (previousFrame.spare === true) {
      previousFrame.addRoll(this.frames[-1][0]);
    } else if (previousFrame.strike === true) {
      previousFrame.addRoll(this.frames[-1][0]);
      previousFrame.addRoll(this.frames[-1][1]);
    }
  }
}

module.exports = Game;