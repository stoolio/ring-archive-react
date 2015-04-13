import React from 'react';

const Select = React.createClass({
  optionsFor(nums) {
    return nums.map(function(num) {
      return (
        <option value={num}>{num}</option>
      );
    });
  },

  // <option value='3' {this.props.perPage === 6 ? 'selected' : ''}>3</option>
  //         <option value='6' {this.props.perPage === 6 ? 'selected' : ''}>6</option>
  //         <option value='9' {this.props.perPage === 6 ? 'selected' : ''}>9</option>


  render() {
    return (
      <label>{this.props.label || ''}
        <select value={this.props.value} onChange={this.props.handleSelect}>
          {this.optionsFor(this.props.options)}
        </select>
      </label>
    );
  }

});

export default Select;
