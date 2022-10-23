const Frame = require('./frame.js');

class Game {
  constructor (frames = []) {
    this.frames = frames;
  }

  addFrame(frame) {
    this.frames.push(frame);
  }
}

module.exports = Game;