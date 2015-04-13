var rafCb = [];
var animationQueued = false;
var token = false;

function performAnimations() {
  animationQueued = false;
  rafCb.forEach(function(fn) {
    fn.call();
  });
  rafCb.length = 0;
  token = false;
}

function queueAnimation(fn) {
  if(!animationQueued) {
    animationQueued = requestAnimationFrame(performAnimations);
    token = Date.now().toString().slice(-4);
  }
  let id = rafCb.push(fn);
  return {
    token,
    id
  };
}

function dequeueAnimation(fn) {
  if(token && token === fn.token) {
    rafCb.splice(fn.id - 1, 1);
    return true;
  }
  return false;
}

export default queueAnimation;
