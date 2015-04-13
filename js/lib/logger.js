function batchLoggerFactory(timeout, name) {
  let queued = false;
  let data = [];
  name = name || '';
  return function(...args) {
    data.push(args);
    if(queued) return;
    setTimeout(function() {
      queued = false;
      console.log(`***${name}***`);
      data.forEach(a => {
        console.log.apply(console, a);
      });
      console.log(`***${name.replace(/./g, '*')}***`);
      data.length = 0;
    }, timeout);
    queued = true;
  };
}

// let log = batchLoggerFactory(500, 'Component Update Results');
// let logger = {};
// ['A', 'B', 'C', 'D', 'E', 'F'].map((l, i) => {
//   logger[l] = batchLoggerFactory(500, 'Prop Comparison ' + l);
// })

export default batchLoggerFactory;
