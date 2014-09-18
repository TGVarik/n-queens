/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({n: n});

  for (var row = 0; row < n; row++){
    for (var col = 0; col < n; col++){
      board.togglePiece(row, col);

      if (board.hasAnyRooksConflicts()){
        board.togglePiece(row, col);

      } else if( board.numPieces() === n ){
        console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.rows()));
        return board.rows();
      }
    }
  }
  return board.rows();
};








// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n: n});
  var solutionCount = 0;

  var recursiveTest = function(){
    //find curent row -->board.numPieces()
    var currentRow = board.numPieces();
    //iterate next row's columns
    for (var col=0; col<n; col++){
      //place piece
      board.togglePiece(currentRow, col);
      //test collisions
      if (!board.hasAnyRooksConflicts()){
        //EXIT CASE!!!!!
        //test if finished
        if (board.numPieces() === n){
          //if true, increment, unset, return
          solutionCount++;
          board.togglePiece(currentRow, col);
          return;
        }
        //for non-collisions, non full boards, recurse  board
        recursiveTest();
      }
      board.togglePiece(currentRow, col);
    }
  };

  recursiveTest();
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});

  for (var row = 0; row < n; row++){
    for (var col = 0; col < n; col++){
      board.togglePiece(row, col);

      if (board.hasAnyQueensConflicts()){
        board.togglePiece(row, col);

      } else if( board.numPieces() === n ){
        console.log('Single solution for ' + n + ' queens:', JSON.stringify(board.rows()));
        return board.rows();
      }
    }
  }
  return board.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n: n});
  var solutionCount = 0;

  var recursiveTest = function(){
    //find curent row -->board.numPieces()
    var currentRow = board.numPieces();
    //iterate next row's columns
    for (var col=0; col<n; col++){
      //place piece
      board.togglePiece(currentRow, col);
      //test collisions
      if (!board.hasAnyQueensConflicts()){
        //EXIT CASE!!!!!
        //test if finished
        if (board.numPieces() === n){
          //if true, increment, unset, return
          solutionCount++;
          board.togglePiece(currentRow, col);
          return;
        }
        //for non-collisions, non full boards, recurse  board
        recursiveTest();
      }
      board.togglePiece(currentRow, col);
    }
  };

  recursiveTest();
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
