const Game = require('./game.js');
const Frame = require('./frame.js');

describe('game', () => {
  let game;
  beforeEach(() => {
    game = new Game();

    const mock_frame_1 = {
      rolls: [3,6],
      score: () => { return 9 },
      strike: () => { return false },
      spare: () => { return false },
    }
    const mock_frame_2 = {
      rolls: [3,7],
      score: () => { return 10 },
      strike: () => { return false },
      spare: () => { return true },
    }
    const mock_frame_3 = {
      rolls: [2,2],
      score: () => { return 4 },
      strike: () => { return false },
      spare: () => { return false },
    }
    const mock_frame_4 = {
      rolls: [10],
      score: () => { return 10 },
      strike: () => { return true },
      spare: () => { return false },
    }
    const mock_frame_5 = {
      rolls: [4,4],
      score: () => { return 8 },
      strike: () => { return false },
      spare: () => { return false },
    }
    const mock_frame_6 = {
      rolls: [10],
      score: () => { return 10 },
      strike: () => { return true },
      spare: () => { return false },
    }
    const mock_frame_7 = {
      rolls: [10],
      score: () => { return 10 },
      strike: () => { return true },
      spare: () => { return false },
    }
    const mock_frame_8 = {
      rolls: [10],
      score: () => { return 10 },
      strike: () => { return true },
      spare: () => { return false },
    }
    const mock_frame_9 = {
      rolls: [9,1],
      score: () => { return 9 },
      strike: () => { return false },
      spare: () => { return false },
    }
    const mock_frame_10 = {
      rolls: [5,2],
      score: () => { return 9 },
      strike: () => { return false },
      spare: () => { return false },
    }
  });

  it ('builds empty', () => {

    expect(game.frames).toEqual([]);
  });
  
  it ('adds a frame to the game log', () => {
    const frame = new Frame();
    frame.addRoll(3);
    frame.addRoll(6);
    game.addFrame(frame);

    expect(game.frames).toEqual([[3,6]]);
  });

  //how do i meaningfully test playFirstTen

  it ('does bonus stuff i guess', () => {
    
  });
  
  // it ('does 11 rounds if they were all strikes', () => {}
  
  // it ('', () => {}  
});