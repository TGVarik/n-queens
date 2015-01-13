/**
 * Created by tom on 9/19/14.
 */


self.test = function (ld, cols, rd, count, n) {
  var all = Math.pow(2, n) - 1;
  if (cols === all) {
    count++;
    self.postMessage({type: 'count', data: {count: count, n: n}});
    return;
  }
  var poss = ~(ld | cols | rd) & (cols ? all : all & (all >> Math.floor(n / 2)) );
  while (poss) {
    var bit = poss & (~poss + 1);
    poss -= bit;
    if ((!poss) && (!cols) && (n & 1)) {
      count *= 2;
    }
    self.postMessage({type: 'test', data: {ld: (ld | bit) << 1, cols: cols | bit, rd: (rd | bit) >> 1, count: count, n: n}});
    if ((!poss) && (!cols) && (!(n & 1))) {
      count *= 2;
    }
  }
};

self.addEventListener('message', function(e){
  if (e.data.type === 'test'){
    self.test(e.data.ld, e.data.cols, e.data.rd, e.data.count, e.data.n);
  }
});