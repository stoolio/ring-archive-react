import React from 'react';
import ProductHeader from './ProductHeader';
import ProductFooter from './ProductFooter';
import ReactTransitionEvents from 'react/lib/ReactTransitionEvents';
import queueAnimation from '../lib/rAFQueue';

function translate(x, y, z) {
  return `translate3d(${x || 0}px, ${y || 0}px, ${z || 0}px)`;
}

const Product = React.createClass({
  getCoords(data) {
    let x = ((data.index - 1) % data.perRow) * data.itemWidth;
    let y = (Math.ceil(data.index / data.perRow) - 1) * data.itemWidth;
    return {
      x,
      y
    };
  },

  animateCoords(coords) {
    let el = React.findDOMNode(this);
    let old = {
      x: parseInt(el.style.left) || 0,
      y: parseInt(el.style.top) || 0
    };
    el.style.transitionProperty = 'transform';
    el.style.transitionDelay = (this.props.index * 40) + 'ms';
    el.style.transitionDuration = (600 - (this.props.index * 40)) + 'ms';
    el.style.transform = translate(coords.x - old.x, coords.y - old.y, -340);
    el.style.zIndex = -1;

    let self = this;
    function doStuff() {
      queueAnimation(function() {
        el.style.removeProperty('transition');
        el.style.removeProperty('transform');
        el.style.removeProperty('z-index');
        self.setCoords(coords);
      });
      ReactTransitionEvents.removeEndEventListener(el, doStuff);
    }
    function doOtherStuff() {
      queueAnimation(() => {
        el.style.transitionDuration = '0.2s';
        el.style.removeProperty('transition-delay');
        el.style.transform = translate(coords.x - old.x, coords.y - old.y, 0);
      });
      ReactTransitionEvents.addEndEventListener(el, doStuff);
      ReactTransitionEvents.removeEndEventListener(el, doOtherStuff);
    }
    ReactTransitionEvents.addEndEventListener(el, doOtherStuff);
  },

  setCoords(coords) {
    let el = React.findDOMNode(this);
    el.style.top = coords.y + 'px';
    el.style.left = coords.x + 'px';
  },

  fadeIn() {
    let el = React.findDOMNode(this);
    el.style.transitionProperty = 'opacity';
    el.style.transitionDuration = '0.4s';
    el.style.transitionDelay = (this.props.index * 40) + 'ms';
    el.style.opacity = 1;

    function doStuff() {
      queueAnimation( () => {
        el.style.removeProperty('opacity');
        el.style.removeProperty('transition');
      });
      ReactTransitionEvents.removeEndEventListener(el, doStuff);
    }
    ReactTransitionEvents.addEndEventListener(el, doStuff);
  },

  animatePosition(data) {
    var self = this;

    return function() {
      let coords = self.getCoords(data);
      self.animateCoords(coords);
    };
  },

  setPosition(data) {
    let self = this;
    let el = React.findDOMNode(self);
    el.style.opacity = 0;

    return function() {
      let coords = self.getCoords(data);
      self.fadeIn();
      self.setCoords(coords);
    };
  },

  // differentEffect(data) {
  //   let self = this;
  //   let el = React.findDOMNode(self);
  //   el
  // },

  componentDidMount() {
    queueAnimation(this.setPosition(this.props));
  },

  shouldComponentUpdate(nextProps, nextState) {
    return ['index', 'perRow', 'itemWidth'].some(prop => {
      let next = nextProps[prop];
      let current = this.props[prop];
      return prop === 'itemWidth' ? Math.abs(next-current) > 2 : next !== current;
    });
  },

  componentWillUpdate(nextProps) {
    queueAnimation(this.animatePosition(nextProps));
  },

  // componentDidUpdate(prevProps) {
  //   queueAnimation(this.setPosition(this.props));
  // },

  // componentWillUnmount() {
  //   let self = this;
  //   let el = React.findDOMNode(self);
  //   el.classList.add('leaving');
  // },

  render() {
    // let coords = this.getCoords(this.props.index, this.props.itemWidth, this.props.perRow);
    let style = {
      // position: 'absolute',
      // transform: `translate(${coords.x}px, ${coords.y}px)`
    };

    return (
      <li style={{width: this.props.itemWidth}}>
        <div className='engagement-ring text-center'>
          <ProductHeader>{this.props.productTitle}</ProductHeader>
          <a href={this.props.url} title={this.props.title}>
            <img src={this.props.imgSrc} />
          </a>
          <ProductFooter price={this.props.price} />
        </div>
      </li>
    );
  }

});

export default Product;
