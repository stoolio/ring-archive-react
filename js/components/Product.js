import React from 'react';
import ProductHeader from './ProductHeader';
import ProductFooter from './ProductFooter';

const Product = React.createClass({
  render() {
    return (
      <article className='engagement-ring'>
        <ProductHeader />
        <div className='entry-summary'>
          <a href={this.props.url} title={this.props.title}>
            <img src={this.props.imgSrc} />
          </a>
        </div>
        <ProductFooter price={this.props.price} />
      </article>
    );
  }

});

export default Product;
