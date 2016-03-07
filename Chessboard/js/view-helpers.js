;(function(globals){

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

      //SHOWING IN THE VIEW WHAT THE SITUATION OF THE PIECES IS AT THE BEGINING OF THE GAME.
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

      //CHANGING THE VIEW DEPENDING ON THE SITUATION OF THE PIECES
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


    });//END EACH FILE
  });//END EACH ROW

} //END helper
}); //END globals view

})(window || module && module.exports || this);
