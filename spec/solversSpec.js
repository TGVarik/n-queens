describe('solvers', function() {
  window.displayBoard = function() {};

  describe('findNRooksSolution()', function() {

    xit('finds a valid solution for n of 1-8', function() {
      _.range(1, 9).map(function(n) {
        var solutionBoard = new Board(findNRooksSolution(n));

        expect(solutionBoard.get('n')).to.equal(n);
        expect(solutionBoard.hasAnyRooksConflicts()).to.be.equal(false);
      });
    });

  });

  describe('countNRooksSolutions()', function() {

    xit('finds the number of valid solutions for n of 1-8', function() {
      _.range(1, 9).map(function(n) {
        var solutionCount = countNRooksSolutions(n);
        var expectedSolutionCount = [undefined, 1, 2, 6, 24, 120, 720, 5040, 40320][n];

        expect(solutionCount).to.be.equal(expectedSolutionCount);
      });
    });

  });

  describe('countNRooksSolutionsFaster()', function() {

    xit('finds the number of valid solutions for n of 1-8', function() {
      _.range(1, 9).map(function(n) {
        var solutionCount = countNRooksSolutionsFaster(n);
        var expectedSolutionCount = [undefined, 1, 2, 6, 24, 120, 720, 5040, 40320][n];

        expect(solutionCount).to.be.equal(expectedSolutionCount);
      });
    });

  });

  describe('findNQueensSolution()', function() {

    xit('finds a valid solution for n of 1-8', function() {
      _.range(1, 9).map(function(n) {
        var solutionBoard = new Board(findNQueensSolution(n));

        expect(solutionBoard.get('n')).to.equal(n);
        expect(solutionBoard.hasAnyQueensConflicts()).to.be.equal(false);
      });
    });

  });

  describe('countNQueensSolutions()', function() {

    xit('finds the number of valid solutions for n of 1-8', function() {
      _.range(1, 9).map(function(n) {
        var solutionCount = countNQueensSolutions(n);
        var expectedSolutionCount = [undefined, 1, 0, 0, 2, 10, 4, 40, 92][n];

        expect(solutionCount).to.be.equal(expectedSolutionCount);
      });
    });

  });

  var a000170 = [null, 1, 0, 0, 2, 10, 4, 40, 92, 352, 724, 2680, 14200, 73712, 365596, 2279184, 14772512, 95815104, 666090624, 4968057848, 39029188884, 314666222712, 2691008701644, 24233937684440, 227514171973736, 2207893435808352, 22317699616364044];

  describe('fast queens', function() {
      xit('runs Q(1)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(1);
        expect(solutionCount).to.be.equal(a000170[1]);
      });
      xit('runs Q(2)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(2);
        expect(solutionCount).to.be.equal(a000170[2]);
      });
      xit('runs Q(3)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(3);
        expect(solutionCount).to.be.equal(a000170[3]);
      });
      xit('runs Q(4)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(4);
        expect(solutionCount).to.be.equal(a000170[4]);
      });
      xit('runs Q(5)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(5);
        expect(solutionCount).to.be.equal(a000170[5]);
      });
      xit('runs Q(6)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(6);
        expect(solutionCount).to.be.equal(a000170[6]);
      });
      xit('runs Q(7)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(7);
        expect(solutionCount).to.be.equal(a000170[7]);
      });
      xit('runs Q(8)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(8);
        expect(solutionCount).to.be.equal(a000170[8]);
      });
      xit('runs Q(9)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(9);
        expect(solutionCount).to.be.equal(a000170[9]);
      });
      xit('runs Q(10)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(10);
        expect(solutionCount).to.be.equal(a000170[10]);
      });
      xit('runs Q(11)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(11);
        expect(solutionCount).to.be.equal(a000170[11]);
      });
      xit('runs Q(12)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(12);
        expect(solutionCount).to.be.equal(a000170[12]);
      });
      xit('runs Q(13)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(13);
        expect(solutionCount).to.be.equal(a000170[13]);
      });
      xit('runs Q(14)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(14);
        expect(solutionCount).to.be.equal(a000170[14]);
      });
      xit('runs Q(15)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(15);
        expect(solutionCount).to.be.equal(a000170[15]);
      });
      xit('runs Q(16)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(16);
        expect(solutionCount).to.be.equal(a000170[16]);
      });
      xit('runs Q(17)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(17);
        expect(solutionCount).to.be.equal(a000170[17]);
      });
      xit('runs Q(18)', function(){
        var solutionCount = window.countNQueensSolutionsFaster(18);
        expect(solutionCount).to.be.equal(a000170[18]);
      });

  });

  describe('fast queens with basic symmetry', function() {
      xit('runs Q(1)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(1);
        expect(solutionCount).to.be.equal(a000170[1]);
      });
      xit('runs Q(2)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(2);
        expect(solutionCount).to.be.equal(a000170[2]);
      });
      xit('runs Q(3)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(3);
        expect(solutionCount).to.be.equal(a000170[3]);
      });
      xit('runs Q(4)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(4);
        expect(solutionCount).to.be.equal(a000170[4]);
      });
      xit('runs Q(5)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(5);
        expect(solutionCount).to.be.equal(a000170[5]);
      });
      xit('runs Q(6)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(6);
        expect(solutionCount).to.be.equal(a000170[6]);
      });
      xit('runs Q(7)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(7);
        expect(solutionCount).to.be.equal(a000170[7]);
      });
      xit('runs Q(8)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(8);
        expect(solutionCount).to.be.equal(a000170[8]);
      });
      xit('runs Q(9)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(9);
        expect(solutionCount).to.be.equal(a000170[9]);
      });
      xit('runs Q(10)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(10);
        expect(solutionCount).to.be.equal(a000170[10]);
      });
      xit('runs Q(11)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(11);
        expect(solutionCount).to.be.equal(a000170[11]);
      });
      xit('runs Q(12)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(12);
        expect(solutionCount).to.be.equal(a000170[12]);
      });
      xit('runs Q(13)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(13);
        expect(solutionCount).to.be.equal(a000170[13]);
      });
      xit('runs Q(14)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(14);
        expect(solutionCount).to.be.equal(a000170[14]);
      });
      xit('runs Q(15)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(15);
        expect(solutionCount).to.be.equal(a000170[15]);
      });
      xit('runs Q(16)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(16);
        expect(solutionCount).to.be.equal(a000170[16]);
      });
      it('runs Q(17)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(17);
        expect(solutionCount).to.be.equal(a000170[17]);
      });
      xit('runs Q(18)', function(){
        var solutionCount = window.countNQueensSolutionsFasterWithSymmetry(18);
        expect(solutionCount).to.be.equal(a000170[18]);
      });

  });



});
