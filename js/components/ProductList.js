import React from 'react';
import Product from './Product';
import Pagination from './PageList';

const ProductList = React.createClass({
  getInitialState() {
    return {page: 0};
  },

  totalPages() {
    return Math.ceil(this.props.data.length);
  },

  pageChange() {
    return true;
  },

  productsOnPage() {
    var offset = 6 * this.page;
    return this.props.data.slice(offset, offset + 6);
  },

  render() {
    var products = this.productsOnPage().map(function(product) {
      return (
        <Product url={product.url}
                 title={product.title}
                 imgSrc={product.imgSrc}
                 price={product.price} />
      );
    });

    return (
      <ul id="engagement-ring-archive" className="large-block-grid-3">
        {products}
      </ul>
      <Pagination totalPages={totalPages} handleClick={this.pageChange} />
    );
  }
});

export default ProductList;
