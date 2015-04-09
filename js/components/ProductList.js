import React from 'react';
import Product from './Product'

const ProductList = React.createClass({
  render() {
    return (
      <ul id="engagement-ring-archive" className="large-block-grid-3">
          <Product url='test.url'
                   title='My ring'
                   imgSrc='/img/ring.jpg'
                   price='2400' />
          <Product url='test.url'
                   title='My ring'
                   imgSrc='/img/ring.jpg'
                   price='2400' />
          <Product url='test.url'
                   title='My ring'
                   imgSrc='/img/ring.jpg'
                   price='2400' />
          <Product url='test.url'
                   title='My ring'
                   imgSrc='/img/ring.jpg'
                   price='2400' />
          <Product url='test.url'
                   title='My ring'
                   imgSrc='/img/ring.jpg'
                   price='2400' />
          <Product url='test.url'
                   title='My ring'
                   imgSrc='/img/ring.jpg'
                   price='2400' />
      </ul>
    )
  }
});

export default ProductList;
