import React from 'react';
import Select from '../Select';

const DiamondClarity = React.createClass({
  render() {
    let clarities = ['VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2'];
    return (
      <Select label='Clarity' options={clarities} value={[]} onChange={() => {}} multiple name='clarity[]' size='6' style={{height: '100%'}} />
    );
  }
});

export default DiamondClarity;
