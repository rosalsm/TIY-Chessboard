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

// var interv;
//
// function playDelay(){
//   interv = setInterval( playD , 2000);
// };
//
// function playD(){
//   game.play();
//   view.helper();
// }
//
// jQuery('.play').on('click', function (event){
//   console.log("i am in controllers play");
//    playDelay();
//  });//end button play on (click)



jQuery('.play').on('click', function (event){
  console.log("i am in controllers play");
   game.play();
   view.helper();
 });//end button play on (click)

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
  jQuery(".next").on('click', function(event){
    console.log('i am in controllers forward');
    game.next();
    view.helper();
    console.log(game.tracer());

  });

    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to advance to the next move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`


  // Controller for "previous move"...This will be step-backward
  jQuery(".prev").on('click', function(event){
    game.prev();
    view.helper();
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
  jQuery(".end").on('click', function(event){
    game.end();
    view.helper();
    console.log("i am in controllers and end")
    console.log(game.tracer());
    });
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to advance to the last move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`


  // Controller for anything else...
   jQuery(".reset").on('click', function(event){
     game.reset();
     view.helper();
     console.log(game.tracer());
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
    });

})(window || module && module.exports || this)
