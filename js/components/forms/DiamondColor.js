import React from 'react';
import Select from '../Select';

const DiamondColor = React.createClass({
  render() {
    let colors = ['D', 'E', 'F', 'G', 'H', 'I', 'J'];
    return (
      <Select label='Color' options={colors} value={[]} onChange={() => {}} multiple name='color[]' size='7' style={{height: '100%'}} />
    );
  }
});

export default DiamondColor;
