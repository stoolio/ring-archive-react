import React from 'react';
import {Row, Column} from '../../structure/';

const Budget = React.createClass({
    render() {
        return (
          <label>
            Budget
            <Row className='collapse'>
              <Column small='1' medium='2'>
                <span className='prefix'>$</span>
              </Column>
              <Column small='11' medium='10'>
                <input name='budget' type='number' />
              </Column>
            </Row>
          </label>
        );
    }

});

export default Budget;
