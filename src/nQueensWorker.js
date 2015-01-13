/**
 * Created by tom on 9/19/14.
 */


self.subWorker = new Worker('bitShiftWorker.js');
self.subWorkers = 0;
self.count = {};

self.solve = function(n, start){
  self.array.unshift({type: 'test', data: {ld: 0, cols: 0, rd: 0, count: self.count[n], n: n}});
  self.subWorker.addEventListener('message', function(e){
    self.subWorkers--;
    self.queue.unshift(e.data);
  });
  self.intervalId = setInterval(function(){
    if (self.subWorkers < navigator.hardwareConcurrency && self.queue.length > 0) {
      self.nextJob();
    } else if (self.subWorkers === 0 && self.queue.length === 0){
      clearInterval(self.intervalId);
      self.postMessage({n: n, result: self.count[n], start: start});
    }
  },0);
};

self.queue = [];

self.nextJob = function(){
  var job = self.queue.splice(-1, 1);
  if (job.type === 'count') {
    self.count[job.data.n] = Math.max(job.data.count, self.count[job.data.n]);
  } else {
    self.subWorker.postMessage({ld: job.data.ld, cols: job.data.cols, rd: job.data.rd, count: self.count[n], n: job.data.n});
    self.subWorkers++;
  }
};

self.addEventListener('message', function(e){
  if (e.data.n < 19){
    self.solve(e.data.n, e.data.start)
  }
});