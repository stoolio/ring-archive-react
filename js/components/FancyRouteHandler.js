import React from 'react';
import {RouteHandler} from 'react-router';
import ReactTransitionEvents from 'react/lib/ReactTransitionEvents';
import queueAnimation from '../lib/rAFQueue';

// Failed attempt at a stupid simple page transition effect
// However, the transitionend doesn't seem to fire
// it's 6am in the morning, my brain is broken

const FancyRouteHandler = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  removeStyle() {
    let el = React.findDOMNode(this);
    console.log('removing');
    el.style.removeProperty('transition');
    el.style.removeProperty('opacity');
    el.removeEventListener('transitionend', this.removeStyles);
  },
  componentWillReceiveProps(nextProps) {
    let el = React.findDOMNode(this);
    console.log(el);
    queueAnimation(function() {
      el.style.opacity = 0;
    })
    el.addEventListener('transitionend', function() {
      queueAnimation(function() {
      console.log('adding');
      el.style.transition = 'opacity 5s ease-in';
      el.style.opacity = 1;
    });
    });
    // ReactTransitionEvents.addEndEventListener(el, this.removeStyles);
  },
  render() {
    return (
      <div className='piece-of-shit'>
        <RouteHandler />
      </div>
    );
  }

});

export default FancyRouteHandler;
