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



window.countNQueensSolutionsFaster = function(n){
  var count = 0;
  var all = Math.pow(2,n)-1;

  var test = function(ld, cols, rd){
    if (cols === all){count++; return;} //EXIT CASE:  if all columns are full, increment`
    var poss = ~(ld | cols | rd) & all //determine possible placements on this row

    while (poss){ //while possible placements this row,
      var bit = poss & (~poss + 1);//place queen in a possibility
      poss -= bit;//change possibility to test for next loop iteration
      test((ld|bit)<<1, cols|bit, (rd|bit)>>1);//recurse to next row passing existing masks
    }
  }
  test(0,0,0);
  console.log('There are ' + count +' solutions to ' + n +'-Queens problem.');
  return count;
};

window.countNRooksSolutionsFaster = function(n){
  var count = 0;
  var all = Math.pow(2,n)-1;

  var test = function(cols){
    if (cols === all){count++; return;} //EXIT CASE:  if all columns are full, increment`
    var poss = ~(cols) & all //determine possible placements on this row

    while (poss){ //while possible placements this row,
      var bit = poss & (~poss + 1);//place queen in a possibility
      poss -= bit;//change possibility to test for next loop iteration
      test(cols|bit);//recurse to next row passing existing masks
    }
  }
  test(0);
  console.log('There are ' + count +' solutions to ' + n +'-Rooks problem.');
  return count;
};
