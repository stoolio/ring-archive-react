import React from 'react';
import ProductHeader from './ProductHeader';
import ProductFooter from './ProductFooter';

const Product = React.createClass({
  render() {
    return (
      <li>
        <div className='engagement-ring text-center'>
          <ProductHeader>{this.props.title}</ProductHeader>
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
