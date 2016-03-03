
 (function(globals){ // IIFE: Immediately Invoked Function Expression


   //Internal representation of the game board in its current state.


  var board = initial(); // initialize the `board` this is the initial board.
//this is different that game.board (function)

   //List of moves for the "Catalan Opening: Closed Variation" suitable for use
   //as arguments to `applyMove` below.

//var moves = { from:{rank:number, file:number}, to:{rank:number, file:number}};
  var moves = [   {from:{rank:6, file:3}, to:{rank:4, file:3}},
                  {from:{rank:0, file:6}, to:{rank:2, file:5}},
                  {from:{rank:6, file:2}, to:{rank:4, file:2}},
                  {from:{rank:1, file:4}, to:{rank:2, file:4}},    //my details for the var
                  {from:{rank:6, file:6}, to:{rank:5, file:6}},
                  {from:{rank:1, file:3}, to:{rank:3, file:3}},
                  {from:{rank:7, file:5}, to:{rank:6, file:6}},
                  {from:{rank:0, file:5}, to:{rank:1, file:4}},
                  {from:{rank:7, file:6}, to:{rank:5, file:5}},
                ];
 var current= 0;
//initialize the count of the moves in moves

  /**
   * Provide a _copy_ of the game board in order to update the View from it
   * @return {Array} of {Array} of {String|null}
   */
  var game = (globals.game = {
    board: function(){
      return board.map(function(row){
        return row.slice();
      });
    },

     //Reset the internal game board to it's initial state. (game.reset)

    reset: function(){
      board = initial();
      current=0;
      return this;  //this refers that reset belongs to function game so it returns game
    },

     //Advance the internal game board to the next move. (game.next)

    next: function(){//code for the next moves
      console.log("i am in main.js");
       if (current < moves.length){
          //game.applyMove(current);
          game.applyMove(moves[current].from,moves[current].to);
          current+=1;
        }
        //console.log(game.tracer());
        console.log(current.move);
      return this;
    },

    //Advance the internal game board to all the moves (game.play)

    play: function(){
      for (current=0; current < moves.length; current++){
    game.applyMove(moves[current].from, moves[current].to);


    console.log(game.tracer());
    console.log(current.move);
    }
      return this;
    },


//TRYING TO ADD DELAY
    // play: function (){
    //   var inter;
    //
    //   function playDelay (){
    //     inter = setInterval (playd , 2000);
    //   };
    //
    //
    //    function playd (){
    //
    //     for (current=0; current < moves.length; current++){
    //
    //
    //        game.applyMove(moves[current].from, moves[current].to);
    //
    //        console.log(game.tracer());
    //        console.log(current.move);
    //
    //
    //
    //    };
    //      return this;
    //
    //   },
    // };





   //Advance the internal game board to the previous move. (game.prev)

    prev: function(){
      if(current >= 0){
        current-=1;
        game.applyMove(moves[current].to,moves[current].from);
        // game.applyMove(from,to);
      }
      console.log(game.tracer());
      return this;
    },

    //Advance the internal game board to the last move. (game.end)

    end: function(){
      for (current=0; current < moves.length; current++){
    game.applyMove(moves[current].from, moves[current].to);
    }
    //console.log(game.tracer());
      return this;
    },
    /**
     * Provide a printable representation of the game board for use as a tracer
     *
     * @return {String} representation of `board`
     * @todo Refactor to use Array methods?
     */
    tracer: function(){
      var bullet = '';
      for ( var rank = 0; rank < board.length; rank++){
        bullet += '|';
        for ( var file = 0; file < board[rank].length; file++ ){
          bullet += (board[rank][file] || ' ') + '|';
        }
        bullet += '\n';
      }
      return bullet;
    },
    /**
     * Apply a move to the game board, given a `from` and `to` position that both
     * contain values for `rank` and `file`.
     *
     * @param {Object} from with `rank` and `file`
     * @param {Object} to with `rank` and `file`
     * @return undefined
     *
     * @todo Fill me in! ...and remove this comment.
     */
    applyMove: function(from, to){
      board[to.rank][to.file] = board[from.rank][from.file];
      board[from.rank][from.file] = null;
    } // END applyMove
      // moves[current].to = moves[current].from;
      // moves[current].from = null;   for going forward.
      //moves[current].from = moves[current].to;
      //moves[current].to = null;      for going backwards.

      //  board[moves[current].to.rank][moves[current].to.file] = board[moves[current].from.rank][moves[current].from.file];
      //  board[moves[current].from.rank][moves[current].from.file] = null;


      //console.log(game.tracer())

  }); // END game
  /**
   * Provide the initial state of the game board, useful for any game.
   *
   * @return {Array} of {Array} of {String|null}
   */
  function initial(){
    return [
      [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
      [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
      [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
    ];
  } // END initial
// You are not expected to understand anything below this line...
})(window || module && module.exports || this);
