


var findNQueensSolutionsFaster = function(n){
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
