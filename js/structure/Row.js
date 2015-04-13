import React from 'react';

const Row = React.createClass({
  render() {
    let className = this.props.className === '' ? 'row' : this.props.className + ' row';
    return (
      <div {...this.props} className={className} >
        {this.props.children}
      </div>
    );
  }

});

export default Row;
