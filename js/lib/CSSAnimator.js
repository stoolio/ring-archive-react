import ReactTransitionEvents from 'react/lib/ReactTransitionEvents';
import queueAnimation from './rAFQueue';
import t from './transformHelpers';

function CSSAnimator() {

}

window.opts = [
  {
    transitionDuration: '1s',
    transitionTimingFunction: 'ease-in',
    transform: {
      translate3d: [-20, -20, -50],
      scale: [2]
    },
    opacity: 0.5
  },
  {
    transitionDuration: '2s',
    transitionTimingFunction: 'ease-out',
    transform: {
      translate3d: [40, 40, 50],
      scale: [0.8]
    },
    opacity: 1
  },
  {
    transitionDuration: '1s',
    transitionTimingFunction: 'linear',
    opacity: 0
  },
  {
    transitionDuration: '3s',
    transitionTimingFunction: 'ease-in-out',
    transform: {
      translate3d: [0, 0, 0],
      scale: [1]
    },
    opacity: 1
  }
];

function makeAnim(anim) {
  let data = [], i;
  for(i in anim) {
    data.push(t[i].apply(null, anim[i]));
  }
  return data.join(' ');
}

var propsAnimated = [];

function waitForAllEvents() {
  console.log(propsAnimated);
  propsAnimated.pop();
  if(propsAnimated.length === 0) {
    console.log('let\'s do this');
    this.doAnimation();
  }
}

//Special animation function
let doAnimation = function() {

  // Requires hackish workaround for sanity:
  // in startAnimation a default opacity/transform
  // are set if none exist
  // if(this._compareStyles(this._getAnim())) {
  //   this.index += 1;
  //   setTimeout(this.doAnimation, this._getAnim().transitionDuration);
  //   return;
  // }

  let last = this.direction === 1 ? (this.index >= (this.lastIndex - 1)) : (this.index < 0);

  let anim = this._getAnim();

  for(var prop in anim) {
    if(prop.includes('transition')) continue;
    propsAnimated.push(prop);
  }

  // I hate this, but transform will emit a change on any slight change
  // but opacity won't
  if( !last &&
      anim.opacity === this.styles.opacity ||
      (anim.opacity === 1 && this.styles.opacity === '')
    )
    propsAnimated.splice(propsAnimated.indexOf('opacity'), 1);

  queueAnimation(function() {
    console.log('animating: ', propsAnimated.join(', '));
    this.styles.transitionProperty = propsAnimated.join(', ');
    for(var i in anim) {
      this.styles[i] = anim[i];
    }
    this.index = this.index + (!this.reverse ? 1 : -1); //this.direction;
  }.bind(this));

  if(last) {
    ReactTransitionEvents.removeEndEventListener(this.el, this.waitForAllEvents);
    ReactTransitionEvents.addEndEventListener(this.el, this.onEnd);
  }
};

let startAnimation = function() {
  this.index = (!this.reverse ? 0 : this.lastIndex - 1); //this.direction === 1 ? 0 : this.lastIndex - 1;
  let emergencyThreshold = this.totalDuration + this.delay + 500 + (this.reverse ? parseInt(this.anims[0].transitionDuration) * 1000 : 0);
  setTimeout(function() {
    ReactTransitionEvents.addEndEventListener(this.el, this.waitForAllEvents);
    this.doAnimation();
  }.bind(this), this.delay);
  this.emergencyTimer = setTimeout(function() {
    console.log('emergency!!');
    this.onEnd();
  }.bind(this), emergencyThreshold);
  console.log('timer: ', this.emergencyTimer);
  console.log('duration: ', emergencyThreshold);
};

let onEnd = function(e) {
  console.log('done!');
  clearTimeout(this.emergencyTimer);
  // Just in case there's an issue and the setTimeout calls this function
  ReactTransitionEvents.removeEndEventListener(this.el, this.waitForAllEvents);
  ReactTransitionEvents.removeEndEventListener(this.el, this.onEnd);
  propsAnimated.length = 0;

  if(this.repeating) {
    this.startAnimation();
  }

  // otherwise, cleanup our inline styles if necessary
  if(this.shouldReset) {
    this.allChanged.forEach(prop => {
      this.styles.removeProperty(prop);
    });
  }

  // we are no longer animating, let it happen again
  this.animating = false;

  // callback?
  if(typeof this.cb === 'function') {
    let fn = this.cb;
    this.cb = undefined;
    fn.call(this);
  }
};

function Animate(el, opts) {
  this.el = el;

  // Sane defaults
  this.direction = 1;
  this.animating = false;
  this.index = 0;
  this.shouldReset = true;

  // This is messed up, I should put them on the prototype
  // but they shouldn't be part of the API, so I might
  // _ name them...
  this.startAnimation = startAnimation.bind(this);
  this.onEnd = onEnd.bind(this);
  this.doAnimation = doAnimation.bind(this);
  this.waitForAllEvents = waitForAllEvents.bind(this);

  if(Array.isArray(el)) {
    // insert code to handle an array of items to animate
  } else if(typeof el !== 'undefined') {
    this.styles = el.style;
  } else {
    return;
  }

  this.originalStyles = this._getStyles();
  console.log('orig duration: ', this.originalStyles.transitionDuration);
  this.currentStyles = this._getStyles();
  this.allChanged = [];
  this.totalDuration = 0;

  this.anims = opts.map(function(anim) {
    if(anim.transform && typeof anim.transform !== 'string')
      anim.transform = makeAnim(anim.transform);
    for(var i in anim) {
      if(i.includes('transition')) {
        if(i === 'transitionDuration') {
          this.totalDuration += parseInt(anim[i]) * 1000;
        }
        i = 'transition';
      }
      if(this.allChanged.indexOf(i) === -1) this.allChanged.push(i);
    }
    return anim;
  }.bind(this));

  this.lastIndex = this.anims.length;
}

function callOnNth(fn, nth, self) {
  var n = 0;
  return function() {
    n += 1;
    if(n === nth) {
      fn.call(self);
    }
  }
}

Animate.prototype =  {
  start: function(delay, repeating) {
    if(this.animating) return;

    this.direction = 1;
    this.reverse = false;

    this._begin(delay, repeating);
  },
  trats: function(delay, repeating) {
    if(this.animating) return;

    this.direction = -1;
    this.reverse = true;

    this._begin(delay, repeating);
  },
  bounce: function(delay, repeating) {
    if(this.animating) return;

    this.cb = this.trats;

    this.start(delay, repeating);
  },
  stop: function() {

  },
  pause: function() {

  },
  reset: function(reset = true) {
    this.shouldReset = reset;
  },
  _begin: function(delay, repeating) {
    this.animating = true;
    this.delay = delay || this.delay || 0;
    this.repeating = repeating || this.repeating || false;
    this.startAnimation();
  },
  _getStyles: function() {
    return {
      transition: this.styles.transition,
      transitionDuration: this.styles.transitionDuration,
      transitionProperty: this.styles.transitionProperty,
      transform: this.styles.transform,
      opacity: this.styles.opacity
    };
  },
  _compareStyles: function(compare, all = false) {
    let current = this._getStyles();
    delete current['transition'];
    for(var i in current) {
      if(current[i] !== compare[i]) {
        return false;
      }
    }
    return true;
  },
  _getAnim: function() {
    if(this.index === -1) {
      let defaults = {
        transform: 'translate3d(0px, 0px, 0px)',
        scale: 1,
        transitionDuration: this.anims[0].transitionDuration,
        transitionProperty: this.anims[0].transitionDuration
      };
      console.log(this.anims[0].transitionDuration, defaults.transitionDuration);
      let length = defaults.length,
          index = -1;
      while(++index < length) {
        let key = defaults[index];
        if(this.originalStyles[key] !== '') {
          defaults[key] = this.originalStyles[key];
        }
      }
      console.log('duration: ', defaults.transitionDuration);
      return defaults;
    }
    return this.anims[this.index];
  }
};

export default Animate;
