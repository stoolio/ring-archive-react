import React from 'react';
import 'react/addons';
import Product from './Product';
import ReactTransitionEvents from 'react/lib/ReactTransitionEvents';
import debounce from '../lib/debounce';

function round(num) {
  return Math.round(num * 10000) / 10000;
}

window.debounce = debounce;

const ProductList = React.createClass({
  getInitialState() {
    return {
      updating: false,
      // ready: false,
      // stats: {
      //   left: false,
      //   top: false,
      //   width: false
      // },
      width: false,
      height: false
    };
  },

  setWidth() {
    let bounds = React.findDOMNode(this).getBoundingClientRect();
    this.setState({
      width: round(bounds.width),
      height: round(bounds.height)
    });
  },

  componentDidMount() {
    this.setWidth();
    window.addEventListener('resize', debounce(500, this.setWidth));
  },

  // componentWillReceiveProps(nextProps) {

  // },

  // componentWillUpdate(nextProps, nextState) {
  //   let nextKeys = nextProps.map(prod => { return prod.key; });
  //   let keys = this.props.map(prod => { return prod.key });
  //   this.leaving = keys.filter(k => {
  //     return (nextKeys.indexOf(k) === -1;
  //   })
  // },

  render() {
    let self = this;
    let itemWidth = round(this.state.width / this.props.perRow);

    var products = this.props.products.map(function(product, i) {
      // if(leaving[product.key]) {
      //   return (
      //   <Product leaving={} onLeave={} index={i + 1} perRow={self.state.perRow} itemWidth={itemWidth} test={product.sku} key={product.sku} url={product.url} productTitle={product.name} imgSrc={product.imgSrc} price={product.price} />
      // );
      // } else {
        // leaving={} onLeave={}
        return (
          <Product index={i + 1} perRow={self.props.perRow} itemWidth={itemWidth} key={product.sku} data={product} />
          // <Product index={i + 1} perRow={self.props.perRow} itemWidth={itemWidth} test={product.sku} key={product.sku} url={product.url} productTitle={product.name} imgSrc={product.imgSrc} price={product.price} />
        );
      // }
    });

    return (
      <div style={{height: '650px'}} component='ul' transitionName='product' id='engagement-ring-archive' >
        {this.state.width ? products : ''}
      </div>
    );
  }

});

export default ProductList;
