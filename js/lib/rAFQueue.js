let rafCb = [];
let animationQueued = false;
let token = false;

function noop() {}

function performAnimations() {
  animationQueued = false;
  let length = rafCb.length;
  let i = -1;
  while(++i < length) {
    rafCb[i].call();
  }
  rafCb.length = 0;
  token = false;
}

export default function queueAnimation(fn) {
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

export function dequeueAnimation(fn) {
  if(token && token === fn.token) {
    // which is fastest/better?
    // rafCb.splice(fn.id - 1, 1);
    rafCb[fn.id] = noop;
    return true;
  }
  return false;
}

// export default queueAnimation;
// export dequeueAnimation;
