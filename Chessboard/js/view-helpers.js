// TODO: Should probably live in `js/view-helpers.js` one day...
;(function(globals){ // That damn IIFE again!
// Your code BELOW here...
console.log("probando helpers");
  // Because the game board only corresponds to the `tbody` element...
  var $chessboard = jQuery('.chessboard tbody'); //getting values in a jQuery collection from DOM elements(view)
  // the view HTML representation of the chessboard
  // I always start variable names with `$` when they reference `jQuery.Collection` values

  // This looks strangely familiar... is that COPY-PASTA!?
  // TODO: this is the representation of the chessboard in the model as arrays of arrays (main.js)

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

  // You could also use nested `for` loops, but this is better...
  //rank and file, we use them in the model?? row and piece, we use them in the view??
  //piece could exits or not depending if we have nothing or a piece.
  jQuery(gameboard).each(function(rank, row){ // iterates on the gameboard each rank (index) in the row
    jQuery(row).each(function(file, piece){  // in every row iterates each file(index) if there is a piece??
//I think here is trying to get the oocation of the pieces (map of the pieces/??????)

      //we are putting all of them
      // http://stackoverflow.com/questions/1442925/how-to-get-nth-jquery-element
      var $square = $chessboard.find('tr').eq(rank).find('td').eq(file)
      // Get the `tr` inside the `chessboard` for the `rank`
      // Get the `td` inside the `tr` for the `file`
      // here is making a copy of the $chessboard for???
      //console.log($square[0].className);
      //console.log($square.get(), rank, file, piece);
      // testing if we are getting what we want

      if (piece) {
       $square.text();
       //console.log($square[0].className);
       //console.log($square.text());
     };

      // Not _exactly_ what we discussed in class...
        // TODO: Convert `square` to class name(s)
        // TODO: Add class name(s) to `td` instead
    });
  });

// Don't go breaking my IIFE...
})(window || module && module.exports || this);
