import React from 'react';
import {Row, Column} from '../../structure/';

const CaratWeight = React.createClass({
  render() {
    return (
      <label>
        Carat Weight
        <Row className='collapse'>
          <Column small='11' medium='10'>
            <input name='size' type='number' />
          </Column>
          <Column small='1' medium='2'>
            <span className='postfix'>ct</span>
          </Column>
        </Row>
      </label>
    );
  }
});

export default CaratWeight;
