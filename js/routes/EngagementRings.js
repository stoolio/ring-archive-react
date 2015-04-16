import React from 'react';
import data from './../data';
import ProductDisplay from './../components/ProductDisplay';

const EngagementRings = React.createClass({
  render() {
    return (
      <ProductDisplay data={data} />
    );
  }
});

export default EngagementRings;
