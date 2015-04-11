import React from 'react';

const Sorter = React.createClass({
  render() {
    return (
      <label id='sorter'>Sort by price
        <ul className='button-group round'>
          <li className='button' onClick={this.props.handleSort}>Highest</li>
          <li className='button' onClick={this.props.handleSort}>Lowest</li>
        </ul>
      </label>
    );
  }

});

export default Sorter;
