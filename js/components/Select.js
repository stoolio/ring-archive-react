import React from 'react';

// I don't know...
const LabelWrap = React.createClass({
  render() {
    return (
      <label>{this.props.label}
        <OnlySelect {...this.props} />
      </label>
    );
  }

});

const OnlySelect = React.createClass({
  optionsFor(opts, labels) {
    if(typeof labels === 'undefined') {
      labels = opts;
    }
    return opts.map(function(opt, i) {
      return (
        <option key={opt} value={opt}>{labels[i]}</option>
      );
    });
  },

  render() {
    return (
      <select {...this.props}>
        {this.optionsFor(this.props.options, this.props.labels)}
      </select>
    );
  }
});

const Select = React.createClass({
  render() {
    let component = LabelWrap;
    if(this.props.label === undefined) {
      component = OnlySelect;
    }
    return React.createElement(component, this.props);
  }
});

export default Select;
