import React from 'react';

const PerPageSelect = React.createClass({
  getInitialState() {
    return {
      value: '6'
    };
  },

  optionFor(num) {
    return (
      <option value={num}>{num}</option>
    );
  },

  // <option value='3' {this.props.perPage === 6 ? 'selected' : ''}>3</option>
  //         <option value='6' {this.props.perPage === 6 ? 'selected' : ''}>6</option>
  //         <option value='9' {this.props.perPage === 6 ? 'selected' : ''}>9</option>


  render() {
    return (
      <label>Items Per Page
        <select onChange={this.props.handleSelect}>
          {this.optionFor(3)}
          {this.optionFor(6)}
          {this.optionFor(9)}
        </select>
      </label>
    );
  }

});

export default PerPageSelect;
