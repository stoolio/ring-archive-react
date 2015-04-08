import React from 'react';

const ProductFooter = React.createClass({
  render() {
    return (
      <footer className='entry-footer'>
        <span className='entry-meta'>{this.props.price}</span>
      </footer>
    );
  }
});

export default ProductFooter;
