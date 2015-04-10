import React from 'react';
import 'react/addons';
import Product from './Product';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

const ProductList = React.createClass({
  getInitialState() {
    return {
      products: this.props.products,
      classes: ''
    };
  },

  render() {
    let products = this.props.products.map(function(product) {
      return (
        <Product key={product.sku} url={product.url} productTitle={product.name} imgSrc={product.imgSrc} price={product.price} />
      );
    });

    return (
      <ReactCSSTransitionGroup component='ul' transitionName='product' id='engagement-ring-archive' className={'small-block-grid-2 large-block-grid-3' + this.state.classes}>
        {products}
      </ReactCSSTransitionGroup>
    );
  }

});

export default ProductList;
