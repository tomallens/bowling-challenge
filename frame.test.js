const Frame = require('./frame.js');

describe('frame', () => {
  let frame;
  beforeEach(() => {
    frame = new Frame();
  }); 
  
  it ('takes rolls and stores them', () => {
    frame.addRoll(4);
    frame.addRoll(5);

    expect(frame.rolls).toEqual([4,5]);
  });

  it ('accepts only a single roll if it was a strike', () => {
    frame.addRoll(10);
    frame.secondRoll(4);

    expect(frame.rolls).toEqual([10]);
  });

  it ('counts up the score for the frame', () => {
    frame.addRoll(4);
    frame.secondRoll(5);
    console.log(frame.rolls)

    expect(frame.score()).toEqual(9);
  });

  it ('evaluates itself as a normal frame', () => {
    frame.addRoll(4);
    frame.secondRoll(5);

    expect(frame.strike()).toBe(false);
    expect(frame.spare()).toBe(false);
  });

  it ('evaluates itself as a spare', () => {
    frame.addRoll(5);
    frame.secondRoll(5);

    expect(frame.strike()).toBe(false);
    expect(frame.spare()).toBe(true);
  });

  it ('evaluates itself as a strike', () => {
    frame.addRoll(10);

    expect(frame.strike()).toBe(true);
    expect(frame.spare()).toBe(false);
  });
});