import React from 'react';

const Select = React.createClass({
  optionsFor(opts, labels) {
    if(typeof labels === 'undefined') {
      labels = opts;
    }
    return opts.map(function(opt, i) {
      return (
        <option value={opt}>{labels[i]}</option>
      );
    });
  },

  render() {
    let select = (
      <select {...this.props} value={this.props.value} onChange={this.props.handleSelect}>
        {this.optionsFor(this.props.options, this.props.labels)}
      </select>
    );
    var component;
    if(this.props.label) {
      component = (
        <label>{this.props.label}
          {select}
        </label>
      );
    } else {
      component = select;
    }
    return (
      {component}
    );
  }

});

export default Select;
