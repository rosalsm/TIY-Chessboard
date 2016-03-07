(function(globals){

console.log("probando controllers");


  // Controller for next move.
  jQuery(".next").on('click', function(event){
    console.log('i am in controllers forward');
    game.next(); //update the model
    view.helper(); //update the view
    console.log(game.tracer());
  });

  // Controller for previous move.
  jQuery(".prev").on('click', function(event){
    game.prev(); //update the model
    view.helper(); //update the view
    console.log("i am in controllers and prev")
    console.log(game.tracer());
  });


  // Controller for end of moves.
  jQuery(".end").on('click', function(event){
    game.end(); //update the model
    view.helper(); //update the view
    console.log("i am in controllers and end")
    console.log(game.tracer());
  });



  // Controller for restart the chessboard.
   jQuery(".reset").on('click', function(event){
     game.reset(); //update the model
     view.helper(); //update the view
     console.log(game.tracer());
   });

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



   // jQuery('.play').on('click', function (event){
   //   console.log("i am in controllers play");
   //    game.play();
   //    view.helper();
   //  });//end button play on (click)

})(window || module && module.exports || this)
