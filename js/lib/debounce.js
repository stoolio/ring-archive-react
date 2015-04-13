function debounce(timeout, fn, ...curriedArgs) {
  var queued = false;
  return function(...args) {
    if(queued) return;
    setTimeout(function() {
      queued = false;
      fn.apply(null, curriedArgs.concat(args));
    }, timeout);
    queued = true;
  };
}

export default debounce;
