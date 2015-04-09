import React from 'react';

const ProductFooter = React.createClass({
  render() {
    return (
      <span className='entry-footer'>{this.props.price}</span>
    );
  }
});

export default ProductFooter;
