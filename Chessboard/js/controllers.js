(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in? event
   * The event to listen will be "click" in one of the buttons on the chessboard.
   * 2. What `SELECTOR` will get the element involved in the interaction? element to target.
   * The element to target will be the one with value number and letter for the next move.
   * 3. What `CALLBACK` should be run when the interaction happens? function to run
   * The function will move the piece located in the starting point to the first move.
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   * When the event happens the callback should listen to the event in the trigger element (button)
   * and move the piece to the next position.
    *
    * event = click
    *selector = button
    *callback = function
    *
   */
console.log("probando controllers");

jQuery('.fa-play').on('click', function(event){
  console.log("i am in controllers play");
   game.play();
  });

  //  board [tr][td]=board[tr][td] next move?????
   //after we have the next move, we can change the piece from the starting point
   //to the next move.


  // document.querySelector(SELECTOR) //SELECTOR is the element we are targetting
  //   .addEventListener(TYPE, CALLBACK);//TYPE is the event and CALLBACK is the function
  // // AKA
  // jQuery(SELECTOR).on(TYPE, CALLBACK);
  // // Where CALLBACK is...
  // function CALLBACK (EVENT){


  // Controller for "next move"... This will be play
  jQuery(".fa-step-forward").on('click', function(event){
    console.log('i am in controllers forward');
    game.next();
    console.log(game.tracer());
      
  });

    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to advance to the next move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`


  // Controller for "previous move"...This will be step-backward
  jQuery(".fa-step-backward").on('click', function(event){
    game.prev();
    console.log("i am in controllers and prev")
    console.log(game.tracer());
  });



    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  //});
  // jQuery('i.fa fa-step-backward').on('click', function(event)){
  //   again playing with this board [tr][td];????????
  // }

  // Controller for "fast-forward"...
  jQuery(".fa-fast-forward").on('click', function(event){
    game.end();
    console.log("i am in controllers and end")
    console.log(game.tracer());
    });
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to advance to the last move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`


  // Controller for anything else...
   jQuery(".fa-backward").on('click', function(event){
     game.reset();
     console.log(game.tracer());
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
    });

// Am I supposed to recognize this?
})(window || module && module.exports || this)
