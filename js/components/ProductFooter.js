import React from 'react';

const ProductFooter = React.createClass({
  formattedPrice() {
    return '$' + this.props.price.toString().replace(/\d(?=(\d{3})+$)/g, '$&,');
  },

  render() {
    return (
      <span className='entry-footer'>{this.formattedPrice()}</span>
    );
  }
});

export default ProductFooter;
