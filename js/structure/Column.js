import React from 'react';

const Column = React.createClass({
  makeClass(size, num) {
    if(typeof num === 'undefined' || num === '') {
      return '';
    }
    return `${size}-${num}`;
  },

  render() {
    let classes = [];

    if(typeof this.props.large === 'string') {
      classes.push(`large-${this.props.large}`);
    }
    if(typeof this.props.medium === 'string') {
      classes.push(`medium-${this.props.medium}`);
    }
    if(typeof this.props.small === 'string') {
      classes.push(`small-${this.props.small}`);
    }

    classes.push('columns');

    return (
      <div className={classes.join(' ')}>
        {this.props.children}
      </div>
    );
  }

});

export default Column;
