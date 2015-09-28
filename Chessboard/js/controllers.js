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

jQuery('i.fa fa-play').on('click', nextMove);
 function nextMove(event){
   var board = document.querySelector('tr.first-last-row');
   //buttonPlay will be element 'i.fa fa-play'
   //this is for the first row but we can do the same with
   //the rest of them. It is a group of 8 arrays with 8 data cells each.
   board [tr][td]=board[tr][td] next move?????
   //after we have the next move, we can change the piece from the satrting point
   //to the next move.
 }




  document.querySelector(SELECTOR) //SELECTOR is the element we are targetting
    .addEventListener(TYPE, CALLBACK);//TYPE is the event and CALLBACK is the function
  // AKA
  jQuery(SELECTOR).on(TYPE, CALLBACK);
  // Where CALLBACK is...
  function CALLBACK (EVENT){
    // Do something with Models and Views...
    // Maybe do something with EVENT...?
  }


  // Controller for "next move"... This will be play
  jQuery(/* your "next move" button */).on('click', function(event){
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to advance to the next move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });//the one that I explain above

  // Controller for "previous move"...This will be step-backward
  jQuery(/* your "previous move" button */).on('click', function(event){
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });
  jQuery('i.fa fa-step-backward').on('click', function(event)){
    again playing with this board [tr][td];????????
  }

  // Controller for "fast-forward"...
  jQuery(/* your "fast-forward" button */).on(/* wat? */, function(event){
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to advance to the last move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for anything else...
  jQuery(/* any other buttons out there? */).on(/* dunno */, function(event){
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

// Am I supposed to recognize this?
//})(window || module && module.exports || this)
