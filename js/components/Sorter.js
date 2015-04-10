import React from 'react';

const Sorter = React.createClass({
  render() {
    return (
      <div id='sorter'>
        <h3>Sort by Price</h3>
        <ul className='button-group round'>
          <li className='button' onClick={this.props.handleSort}>Highest</li>
          <li className='button' onClick={this.props.handleSort}>Lowest</li>
        </ul>
      </div>
    );
  }

});

export default Sorter;
