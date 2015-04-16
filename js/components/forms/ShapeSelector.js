import React from 'react';
import Select from '../Select';

// For ref, in case I didn't get it right, delete when it works
// <li>
//   <img className='th radius' src='/img/diamonds/pear.png' />
//   Pear
// </li>

const ShapeSelector = React.createClass({
  render() {
    let diamonds = ['Round', 'Princess', 'Radiant', 'Cushion', 'Oval', 'Emerald', 'Marquise', 'Asscher', 'Pear'];
    let diamondSelect = diamonds.map(diamond => {
      return (
        <li>
          <img className='th radius' src={`/img/diamonds/${diamond.toLowerCase()}.png`} />
          {diamond}
        </li>
      );
    });
    return (
      <label>
        Shape
        <ul className='small-block-grid-3 text-center' id='shape-selector'>
          {diamondSelect}
        </ul>
        <Select value={'?'} onChange={() => {}} options={diamonds} id='shape-list' multiple='true' name='shape[]' size='7' style={{display: 'none'}} />
      </label>
    );
  }
});

export default ShapeSelector;
