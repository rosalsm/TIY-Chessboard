// TODO: Should probably live in `js/view-helpers.js` one day...
;(function(globals){ // That damn IIFE again!

console.log("probando helpers");

var view = (globals.view = {

  helper: function(){

    var $chessboard = jQuery('.chessboard tbody');



    var gameboard = game.board();
  // [
  //   [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
  //   [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
  //   Array(8).fill(null),
  //   Array(8).fill(null),
  //   Array(8).fill(null),
  //   Array(8).fill(null),
  //   [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
  //   [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
  // ];


  jQuery(gameboard).each(function(rank, row){ // iterates on the gameboard each rank (index) in the row
    jQuery(row).each(function(file, piece){  // in every row iterates each file(index) if there is a piece??

      //we are putting all of them
      // http://stackoverflow.com/questions/1442925/how-to-get-nth-jquery-element
      var $square = $chessboard.find('tr').eq(rank).find('td').eq(file)
      // Get the `tr` inside the `chessboard` for the `rank`
      // Get the `td` inside the `tr` for the `file`
      // here is making a copy of the $chessboard for???
      //console.log($square[0].className);
      //console.log($square.get(), rank, file, piece);
      // testing if we are getting what we want

      // if(piece){$square.text(piece)};
      //else{$square.text(" ")};

      //SHOWING INN THE VIEW WHAT THE SITUATION OF THE PIECES IS AT THE BEGINING OF THE GAME.
      if (piece === 'R') {
       $square.addClass('bRook');
       }
      if (piece === 'N'){
       $square.addClass('bKnight');
       }
      if (piece === 'B'){
        $square.addClass('bBishop');
      }
      if (piece === 'Q'){
        $square.addClass('bQueen');
      }
      if (piece === 'K'){
        $square.addClass('bKing');
      }
      if (piece === 'P'){
        $square.addClass('bPawn');
      }
      if (piece === 'p'){
        $square.addClass('wPawn');
      }
      if (piece === 'r'){
        $square.addClass('wRook');
      }
      if (piece === 'n'){
        $square.addClass('wKnight');
      }
      if (piece === 'q'){
        $square.addClass('wQueen');
      }
      if (piece === 'k'){
        $square.addClass('wKing');
      }
      if (piece === 'b'){
        $square.addClass('wBishop');
      }


      if (piece !== 'R') {
       $square.removeClass('bRook');
       }
      if (piece !== 'N'){
       $square.removeClass('bKnight');
       }
      if (piece !== 'B'){
        $square.removeClass('bBishop');
      }
      if (piece !== 'Q'){
        $square.removeClass('bQueen');
      }
      if (piece !== 'K'){
        $square.removeClass('bKing');
      }
      if (piece !== 'P'){
        $square.removeClass('bPawn');
      }
      if (piece !== 'p'){
        $square.removeClass('wPawn');
      }
      if (piece !== 'r'){
        $square.removeClass('wRook');
      }
      if (piece !== 'n'){
        $square.removeClass('wKnight');
      }
      if (piece !== 'q'){
        $square.removeClass('wQueen');
      }
      if (piece !== 'k'){
        $square.removeClass('wKing');
      }
      if (piece !== 'b'){
        $square.removeClass('wBishop');
      }


      // if (piece){
      //   $square.addClass(piece);  TODO try to refactor this
      // }


     // changing the move of the pieces and leaving and empty td when the piece is moving
       //console.log($square[0].className);
       //console.log($square.text());


      // Not _exactly_ what we discussed in class...
        // TODO: Convert `square` to class name(s)
        // TODO: Add class name(s) to `td` instead
    });//END EACH FILE
  });//END EACH ROW

} //END helper
}); //END globals view
// Don't go breaking my IIFE...
})(window || module && module.exports || this);


//IDEAS

// otro 2

//var view = (globals.view = {
//as we did with the model in main.js if we declare a var view and create another IIFE globals.view we can
// use this view.helper function in controllers in order to move the pieces. However in my case is only moving
// letters. I think because it is moving a representation of the model in the view now that they are connected
// by the view.helper and game.board line20.
  //helper: function(){
  //var $chessboard = jQuery('.chessboard tbody');
  //getting values in a jQuery collection from DOM elements(view)
  // Because the game board only corresponds to the `tbody` element...
  // the view HTML representation of the chessboard
  // I always start variable names with `$` when they reference `jQuery.Collection` values

  // TODO: this is the representation of the chessboard in the model as arrays of arrays (main.js)

  //var gameboard = game.board();
  // [
  //   [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
  //   [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
  //   Array(8).fill(null),
  //   Array(8).fill(null),
  //   Array(8).fill(null),
  //   Array(8).fill(null),
  //   [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
  //   [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
  // ];

  // You could also use nested `for` loops, but this is better...
  //rank and file, we use them in the model?? row and piece, we use them in the view??
  //piece could exits or not depending if we have nothing or a piece.
  //jQuery(gameboard).each(function(rank, row){ // iterates on the gameboard each rank (index) in the row
    //jQuery(row).each(function(file, piece){  // in every row iterates each file(index) if there is a piece??
//I think here is trying to get the location of the pieces (map of the pieces/??????)

      //we are putting all of them
      // http://stackoverflow.com/questions/1442925/how-to-get-nth-jquery-element
      //var $square = $chessboard.find('tr').eq(rank).find('td').eq(file)
      // Get the `tr` inside the `chessboard` for the `rank`
      // Get the `td` inside the `tr` for the `file`
      // here is making a copy of the $chessboard for???
      //console.log($square[0].className);
      //console.log($square.get(), rank, file, piece);
      // testing if we are getting what we want

      // if(piece){$square.text(piece)};
      //else{$square.text(" ")};

      //SHOWING INN THE VIEW WHAT THE SITUATION OF THE PIECES IS AT THE BEGINING OF THE GAME.
      // if (piece === 'R') {
      //  $square.addClass('bRook');
      //  }
      // if (piece === 'N'){
      //  $square.addClass('bKnight');
      //  }
      // if (piece === 'B'){
      //   $square.addClass('bBishop');
      // }
      // if (piece === 'Q'){
      //   $square.addClass('bQueen');
      // }
      // if (piece === 'K'){
      //   $square.addClass('bKing');
      // }
      // if (piece === 'P'){
      //   $square.addClass('bPawn');
      // }
      // if (piece === 'p'){
      //   $square.addClass('wPawn');
      // }
      // if (piece === 'r'){
      //   $square.addClass('wRook');
      // }
      // if (piece === 'n'){
      //   $square.addClass('wKnight');
      // }
      // if (piece === 'q'){
      //   $square.addClass('wQueen');
      // }
      // if (piece === 'k'){
      //   $square.addClass('wKing');
      // }
      // if (piece === 'b'){
      //   $square.addClass('wBishop');
      // }

      // if (piece){
      //   $square.addClass(piece);  TODO try to refactor this
      // }


     // changing the move of the pieces and leaving and empty td when the piece is moving
       //console.log($square[0].className);
       //console.log($square.text());


      // Not _exactly_ what we discussed in class...
        // TODO: Convert `square` to class name(s)
        // TODO: Add class name(s) to `td` instead
    //});//END EACH FILE
  //});//END EACH ROW

//David  1
// var update = globals.update = {
//   view:function(){
//     var $chessboard = $("tbody");
//
//     $('td').removeClass();
//
//     var gameboard = game.board();
//     $("tbody tr td").ep(highlightindex).addClass("highlight");
//
//     jQuery(gameboard).each(function(rank, row){
//       jQuery(row).each(function(file, piece){
//         // http://stackoverflow.com/questions/1442925/how-to-get-nth-jquery-element
//         var $square = $chessboard.find('tr').eq(rank).find('td').ep('file');
//         if (piece){
//           $square.addClass(piece);
//         };
//       });
//     });
//   }
// };
