import React from 'react';

const ProductHeader = React.createClass({
  render() {
    return (
      <span className='title'>
        {this.props.children}
      </span>
    );
  }

});

export default ProductHeader;
