

(function(globals){ // IIFE console.log("testing");
 var expect = chai.expect                           //setting up tests


  it('should have a `game` in the `window`', function(){
    chai.expect(window.game).to.be.equal(game);
    chai.expect(game).to.be.an('object');
    chai.expect(game.board).to.a('function');
  });

  it('should give me a big array as the board', function(){
    var board = game.board();

    chai.expect(board).to.be.an('array');
    // chai.expect(game.board().length).to.be.equal(8);
    chai.expect(board).to.have.length(8);
    chai.expect(board[0]).to.be.a('array');
    chai.expect(board[0]).to.have.length(8);
    chai.expect(board[0][0]).to.be.a('string');
    chai.expect(board[0][0]).to.equal('R');
  }); // END it should be a big Array

  it.skip('should I tell me what piece is at a position', function(){
    expect(game.pieceAt(6,3)).to.equal('p');
    expect(game.pieceAt(6,2)).to.equal('p');
    expect(game.pieceAt(4,3)).to.be.null;
    expect(game.pieceAt(0,0)).to.equal('R');
  })

  it('should be able to move a piece', function(){
    // board[0][0] = board[0][1];
    game.reset();  //to re-initialize the board after every move to the initial position
    var board = game.board

    //text the pre conditions
    expect(board[6][3]).to.equal('p');
    expect(board[4][3]).to.be.null;

    //action to make in the chessboard
  expect(game.applyMove(
      { rank: 6, file: 3 }, // from
      { rank: 4, file: 3 } // to
    )).to.equal(undefined);

    var board = game.board(); //re-copy the board?

    //test post conditions
    chai.expect(board[6][3]).to.be.null;
    chai.expect(board[4][3]).to.be.equal('p');

});


    //expect(game.tracer()).to.equal([
      //here goes the representation of the chessboard in 8 arrays (remember commas between columns and in quotes)
      //representation is better for us to understand visually what we are doing
    //].join('\n') + '\n');


    it('should be able to move a different piece', function(){
    // initialize environment
    game.reset();
    var board = game.board();

    function toTracer (rows){
      return rows.join('\n') + '\n';
    };

    //Test the precondition...
//    chai.expect(game.tracer()).to.equal(toTracer([
//      | | | | | | | | | | || | |
      //here goes the representation of the chessboard in 8 arrays (remember commas between columns and in quotes)
      //representation is better for us to understand visually what we are doing
//    ].join('\n') + '\n');
//  });

    // Note for later...
    // var secondMove = moves[1] = {
    //   from: {rank:0, file:6},
    //   to: {rank:2, file:5 }
    // }

    // Action: applyMove for N16 (black knight to f6)
    expect(game.applyMove(
      {rank: 0, file:6 }, //from
      {rank: 2, file:5 } //to
    )).to.be.undefined;
  });

  //test postconditions...
  chai.expect(game.tracer()).to.equal(toTracer([
//  |||||||||||||||||||||||
]));

  it.skip('should be able to advance to the next move', function(){
    // TODO: Maybe I should write some tests for this?
  });



// You are not expected to understand anything below this line...
})(window || module && module.exports || this);
