(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in? event
   * 2. What `SELECTOR` will get the element involved in the interaction? element to target.
   * 3. What `CALLBACK` should be run when the interaction happens? function to run
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */
  document.querySelector(SELECTOR) //SELECTOR is the element we are targetting
    .addEventListener(TYPE, CALLBACK);//TYPE is the event and CALLBACK is the function
  // AKA
  jQuery(SELECTOR).on(TYPE, CALLBACK);
  // Where CALLBACK is...
  function CALLBACK (EVENT){
    // Do something with Models and Views...
    // Maybe do something with EVENT...?
  }


  // Controller for "next move"...
  jQuery(/* your "next move" button */).on('click', function(event){
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to advance to the next move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "previous move"...
  jQuery(/* your "previous move" button */).on('click', function(event){
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

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
})(window || module && module.exports || this)
